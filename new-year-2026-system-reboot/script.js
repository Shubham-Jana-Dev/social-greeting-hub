const output = document.getElementById('output');
const terminal = document.getElementById('terminal');
const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');

const archetypes = [
    { 
        title: "AI ARCHITECT", 
        goal: "Master Agentic Workflows.",
        resource: "DeepLearning.AI",
        link: "https://www.deeplearning.ai/"
    },
    { 
        title: "UI/UX WIZARD", 
        goal: "Master 3D Web & Shaders.",
        resource: "Three.js Journey",
        link: "https://threejs-journey.com/"
    },
    { 
        title: "OPEN SOURCE TITAN", 
        goal: "Contribute to Top Tier Repos.",
        resource: "First Contributions",
        link: "https://firstcontributions.github.io/"
    },
    { 
        title: "PERFORMANCE NINJA", 
        goal: "0.1s LCP on all projects.",
        resource: "Web.dev Patterns",
        link: "https://web.dev/patterns/"
    }
];

function rebootSystem() {
    document.getElementById('init-text').style.display = 'none';
    terminal.classList.add('glitch');
    output.innerHTML += `<p class="text-red-500 font-bold uppercase tracking-widest">>> Stopping 2025.services... DONE</p>`;

    setTimeout(() => {
        terminal.classList.remove('glitch');
        output.innerHTML = `<p class="text-green-400">>> Injecting 2026_Kernel.bin...</p>`;
        startFireworks();

        setTimeout(() => {
            const res = archetypes[Math.floor(Math.random() * archetypes.length)];
            output.innerHTML = `
                <div class="text-center mb-6">
                    <h2 class="text-3xl font-black text-white">HAPPY 2026! 🎆</h2>
                    <p class="text-xs text-gray-500 mt-1">Reboot successful. System stable.</p>
                </div>
                
                <div class="bg-[#010409] p-5 rounded-lg border border-[#30363d] mb-4">
                    <p class="text-[10px] text-green-500 mb-1 font-black tracking-widest">ASSIGNED ARCHETYPE:</p>
                    <h3 class="text-xl font-bold text-white mb-2">${res.title}</h3>
                    <p class="text-sm text-gray-400 italic">"Objective: ${res.goal}"</p>
                </div>

                <div class="p-4 rounded-lg bg-[#161b22] border border-[#30363d]">
                    <p class="text-[10px] text-yellow-500 font-black mb-3 uppercase">Recommended Learning Path:</p>
                    <a href="${res.link}" target="_blank" class="resource-link block p-3 rounded-md">
                        <div class="flex items-center justify-between">
                            <span class="text-sm font-bold text-white">${res.resource}</span>
                            <span class="text-xs text-green-500 font-bold">START PATH →</span>
                        </div>
                    </a>
                </div>

                <div class="mt-6 flex justify-center">
                    <button onclick="location.reload()" class="text-[9px] font-bold text-gray-500 hover:text-white uppercase tracking-widest border border-[#30363d] px-4 py-1 rounded">Reset Session</button>
                </div>
            `;
        }, 1200);
    }, 1000);
}

// Firework engine remains high performance
function startFireworks() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particles = [];
    
    function createExplosion(x, y) {
        const color = `hsl(${Math.random() * 360}, 80%, 60%)`;
        for (let i = 0; i < 30; i++) {
            particles.push({
                x, y,
                vx: Math.cos(i) * (Math.random() * 6 + 2),
                vy: Math.sin(i) * (Math.random() * 6 + 2),
                life: 1.0, color
            });
        }
    }

    function animate() {
        ctx.fillStyle = 'rgba(10, 10, 10, 0.2)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        if (Math.random() < 0.08) createExplosion(Math.random() * canvas.width, Math.random() * (canvas.height / 2));
        particles.forEach((p, i) => {
            p.x += p.vx; p.y += p.vy; p.vy += 0.05; p.life -= 0.02;
            ctx.globalAlpha = p.life; ctx.fillStyle = p.color;
            ctx.beginPath(); ctx.arc(p.x, p.y, 2, 0, Math.PI * 2); ctx.fill();
            if (p.life <= 0) particles.splice(i, 1);
        });
        requestAnimationFrame(animate);
    }
    animate();
}