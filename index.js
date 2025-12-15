const rpc = require("discord-rpc");
const config = require("./config.json");
const client = new rpc.Client({ transport: 'ipc' });
const axios = require("axios");

const startTime = Date.now();

const servers = [
    "https://api.mcsrvstat.us/bedrock/2/play.paladium-bedrock.fr:19132",
    "https://api.mcsrvstat.us/bedrock/2/faction.paladium-bedrock.fr:19133",
    "https://api.mcsrvstat.us/bedrock/2/minage.paladium-bedrock.fr:19134",
    "https://api.mcsrvstat.us/bedrock/2/farmland.paladium-bedrock.fr:19135"
];

async function getTotalPlayers() {
    let totalOnline = 0;
    let totalMax = 0;

    for (const url of servers) {
        try {
            const res = await axios.get(url);
            totalOnline += res.data.players?.online ?? 0;
            totalMax += res.data.players?.max ?? 0;
        } catch (err) {
            console.error("Erreur API pour", url, ":", err.message);
        }
    }

    console.log(`Joueurs connectés (total): ${totalOnline}/${totalMax}`);
    return { online: totalOnline, max: totalMax };
}

async function updatePresence() {
    const { online, max } = await getTotalPlayers();

    client.request("SET_ACTIVITY", {
        pid: process.pid,
        activity: {
            details: config.details,
            assets: {
                large_image: config.largeimage,
                large_text: config.largetext,
                small_image: config.smallimage,
                small_text: config.smalltext 
            },
            timestamps: {
                start: startTime
            },
            party: {
                id: "paladium-network",
                size: [online, max]
            },
            buttons: [
                { label: config.button1, url: config.url1 },
                { label: config.button2, url: config.url2 }
            ]
        }
    });
}

client.on("ready", () => {
    console.log("Le RPC Paladium Bedrock estconnecté à Discord !");
    updatePresence();
    setInterval(updatePresence, 60000);
});

client.login({ clientId: config.clientid }).catch(console.error);
