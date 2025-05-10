document.addEventListener('DOMContentLoaded', function() {
    // Project data structure with improved positioning
    const projects = [
        {
            id: 'leandojo',
            name: 'LeanDojo',
            status: 'completed',
            position: { x: 40, y: 50 },
            description: 'Theorem Proving with Retrieval-Augmented Language Models',
            publication: 'NeurIPS 2023',
            contributors: ['Peiyang', 'Kaiyu'],
            timeline: 'Released dataset + tools to extract Lean repositories info + ReProver model',
            pros: [
                'Already published and well-received',
                'Core tool for expanding to different Lean Projects',
                'Used for variety of projects'
            ],
            cons: [
                'ReProver model needs to be updated to latest version of Lean4',
                'Last update was 6 months ago',
                'Needs more GPU resources to train bigger models'
            ],
            nextSteps: [
                'Train more bigger models',
                'Investigate inference time scaling',
                'Update ReProver model to the latest version of Lean4'
            ]
        },
        {
            id: 'leanagent',
            name: 'LeanAgent',
            status: 'completed',
            position: { x: 40, y: 180 },
            description: 'Lifelong Learning for Formal Theorem Proving',
            publication: 'CLR 2025',
            contributors: ['Adarsh', 'Mo', 'Robert'],
            timeline: 'Using ReProver model from LeanDojo but finetune on every new repository',
            pros: [
                'Demonstrates curriculum learning over different math domains',
                'Maintains plasticity while avoiding catastrophic forgetting',
                'Much better results than finetuning the baseline'
            ],
            cons: [
                'Currently limited to specific repositories',
                'Requires integration into mathematician workflows'
            ],
            nextSteps: [
                'Integrate into workflow for mathematicians',
                'Enable training on custom repositories',
                'Improve proof theorem capabilities'
            ]
        },
        {
            id: 'leancopilot',
            name: 'LeanCopilot',
            status: 'completed',
            position: { x: 240, y: 50 },
            description: 'Code completion for Lean',
            publication: 'Submission to NeuSYS 2025',
            contributors: ['Peiyang'],
            timeline: 'Uses the same ReProver model from LeanDojo but with specific adaptations',
            pros: [
                'Demonstrates curriculum learning effectively',
                'Adapts to different math domains',
                'Much better results than baseline approaches'
            ],
            cons: [
                'Integration challenges with existing workflows',
                'Needs mathematician adoption'
            ],
            nextSteps: [
                'Integration into workflow',
                'Improve training on repositories',
                'Enhance theorem proving capabilities'
            ]
        },
        {
            id: 'leancontinue',
            name: 'LeanContinue',
            status: 'in-progress',
            position: { x: 240, y: 180 },
            description: 'Unified interface for all Lean tools',
            publication: 'Paper writing with LeanCopilot (TMLR submission planned)',
            contributors: ['Gavin', 'Peiyang'],
            timeline: 'Creating unified interface for all Lean tools for public release',
            pros: [
                'Will create a unified interface for all Lean tools',
                'Makes tools accessible to general public',
                'Cursor/VSCode-like design specific to Lean'
            ],
            cons: [
                'Challenge of integrating multiple systems',
                'User experience requirements are complex'
            ],
            nextSteps: [
                'Develop interface similar to cursor/vscode but Lean-specific',
                'Enable easy initialization of all modules',
                'Implement autocomplete instead of suggesting tactics'
            ]
        },
        {
            id: 'leanformal',
            name: 'LeanFormal',
            status: 'not-started',
            position: { x: 240, y: 310 },
            description: 'Autoformalizer for converting informal proofs to formal proofs',
            publication: 'No submission planned, will be open source',
            contributors: ['Robert', 'Potential Postdoc/SURF'],
            timeline: 'Will release open source with LeanContinue',
            pros: [
                'Will convert informal proofs to formal proofs',
                'Enables explanation of formal proofs in natural language',
                'Can leverage open source LLMs for part of the work'
            ],
            cons: [
                'Requires substantial data collection',
                'Needs manual labeling',
                'Hard autoformalizing task'
            ],
            nextSteps: [
                'Create autoformalizer for informal to formal proofs',
                'Develop reverse autoformalizer for explanations',
                'Explore collaboration with lab from Peking'
            ]
        },
        {
            id: 'leanprogress',
            name: 'LeanProgress',
            status: 'in-progress',
            position: { x: 40, y: 310 },
            description: 'Predicting number of steps to the goal',
            publication: 'Paper submitted to ICML 2025',
            contributors: ['Suozhi', 'Peiyang', 'Robert'],
            timeline: 'Integration with LeanCopilot for step prediction',
            pros: [
                'Can predict the number of steps to the goal',
                'Will be integrated with LeanCopilot',
                'Uses deepseak-prover + ReProver for retrieval'
            ],
            cons: [
                'Complex integration challenges',
                'Needs larger models testing'
            ],
            nextSteps: [
                'Integrate with LeanCopilot for tactic prediction',
                'Explore using results as a reward for RL',
                'Prune search tree and recursively suggest next tactics'
            ]
        },
        {
            id: 'leanpde',
            name: 'LeanPDE',
            status: 'in-progress',
            position: { x: 440, y: 50 },
            description: 'Formalizing PDEs in general euclidean spaces',
            publication: 'Target submission NeurIPS 2025 or ICLR 2026',
            contributors: ['Robert', 'Looi'],
            timeline: 'Basic definitions + Transport equation is done',
            pros: [
                'Working toward formalizing millennium problem (Navier Stokes)',
                'Part of sobolev spaces already formalized',
                'Can potentially verify important mathematical results'
            ],
            cons: [
                'Complex mathematical formalization required',
                'Long timeline to full implementation'
            ],
            nextSteps: [
                'Formalize most PDEs in general euclidean spaces',
                'Move onto sobolev spaces',
                'Integrate with Neural Operators later on'
            ]
        },
        {
            id: 'leannn',
            name: 'LeanNN',
            status: 'in-progress',
            position: { x: 440, y: 180 },
            description: 'Formalizing Neural Networks in Lean',
            publication: 'No target submission yet (class project + SURF)',
            contributors: ['Robert'],
            timeline: 'Basic NN has been coded, exploring SciLean capabilities',
            pros: [
                'Can both prove theorems and create/train neural networks',
                'Can verify properties like continuity',
                'Will bridge gap with other Lean projects'
            ],
            cons: [
                'Complex integration with mathematical formalizations',
                'Early stage of development'
            ],
            nextSteps: [
                'Formalize Neural Networks more completely',
                'Prove properties like continuity',
                'Bridge gap with LeanPDE and LeanVerify',
                'Formalize Neural Operators'
            ]
        },
        {
            id: 'leannumerical',
            name: 'LeanNumerical',
            status: 'not-started',
            position: { x: 440, y: 310 },
            description: 'Integrating numerical solvers/ML models with Lean',
            publication: 'No submission planned',
            contributors: ['Robert', 'Potential Postdoc/SURF'],
            timeline: 'Example already exists in SciLean',
            pros: [
                'Will formally verify solvers for PDEs/ODEs',
                'Can integrate with SciLean',
                'Could combine with Neural Operators for advanced verification'
            ],
            cons: [
                'Complex integration challenges',
                'Needs expertise in both numerics and formal methods'
            ],
            nextSteps: [
                'Create integration between numerical solvers/ML models and Lean',
                'Formally verify solvers for PDEs/ODEs',
                'Combine hybrid proof with Lean and Neural Operators',
                'Possibly integrate with Mathematica'
            ]
        },
        {
            id: 'leanverify',
            name: 'LeanVerify',
            status: 'not-started',
            position: { x: 440, y: 440 },
            description: 'Formal verification tools in Lean',
            publication: 'No submission planned',
            contributors: ['Robert', 'Potential Postdoc/SURF'],
            timeline: 'Plan to learn Coq next quarter for related techniques',
            pros: [
                'Can verify kernel level transformations',
                'Useful for program synthesis verification',
                'Could verify properties of neural operators'
            ],
            cons: [
                'Needs expertise in program verification',
                'Complex integration with other systems'
            ],
            nextSteps: [
                'Create formal verification tools in Lean',
                'Develop program verification capabilities',
                'Verify neural operator convergence properties'
            ]
        },
        {
            id: 'leanfoundation',
            name: 'LeanFoundation',
            status: 'not-started',
            position: { x: 640, y: 180 },
            description: 'Foundational model for Lean',
            publication: 'No submission planned',
            contributors: ['Robert', 'Potential Postdocs/SURFs'],
            timeline: 'Ultimate goal combining all LeanX projects',
            pros: [
                'Will combine different modalities (language, images, formal)',
                'Can explore chain of thought reasoning',
                'Will unify all LeanX projects'
            ],
            cons: [
                'Highly ambitious goal',
                'Depends on success of other projects',
                'Requires extensive resources'
            ],
            nextSteps: [
                'Create foundational model for Lean',
                'Combine different modalities',
                'Integrate all LeanX projects into LeanContinue',
                'Make tools accessible to everyone'
            ]
        }
    ];

    // Define sequential flow connections between projects
    const connections = [
        // Primary path from LeanDojo to LeanFoundation
        { from: 'leandojo', to: 'leancopilot', type: 'main' },
        { from: 'leancopilot', to: 'leancontinue', type: 'main' },
        { from: 'leancontinue', to: 'leanformal', type: 'main' },
        { from: 'leanformal', to: 'leanfoundation', type: 'main' },
        
        // Secondary path through LeanAgent
        { from: 'leandojo', to: 'leanagent', type: 'secondary' },
        { from: 'leanagent', to: 'leanformal', type: 'secondary' },
        
        // LeanProgress integration
        { from: 'leanprogress', to: 'leancopilot', type: 'secondary' },
        
        // Technical path through PDE
        { from: 'leanpde', to: 'leannn', type: 'main' },
        { from: 'leannn', to: 'leannumerical', type: 'main' },
        { from: 'leannumerical', to: 'leanverify', type: 'main' },
        { from: 'leanverify', to: 'leanfoundation', type: 'main' },
        
        // Direct connections to foundation
        { from: 'leanpde', to: 'leanfoundation', type: 'secondary' },
        { from: 'leannn', to: 'leanfoundation', type: 'secondary' },
        { from: 'leannumerical', to: 'leanfoundation', type: 'secondary' }
    ];

    // DOM elements
    const roadmapEl = document.getElementById('roadmap');
    const libraryEl = document.getElementById('library');
    const projectTitleEl = document.getElementById('projectTitleTop');
    const projectContentEl = document.getElementById('projectContentTop');
    const backButtonContainer = document.getElementById('backButtonContainer');
    const backButton = document.getElementById('backButton');
    const btnRoadmap = document.getElementById('btn-roadmap');
    const btnLibrary = document.getElementById('btn-library');
    const roadmapView = document.getElementById('roadmapView');
    const libraryView = document.getElementById('libraryView');

    if (!roadmapEl || !libraryEl) {
        console.error('Required elements not found');
        return;
    }

    // Create roadmap nodes and library books
    projects.forEach(project => {
        // Create node for roadmap
        const node = document.createElement('div');
        node.id = project.id;
        node.className = `project-node ${project.status === 'completed' ? 'completed' : project.status === 'in-progress' ? 'in-progress' : 'not-started'}`;
        
        // Create a label for the project name to ensure visibility
        const nodeLabel = document.createElement('div');
        nodeLabel.className = 'project-label';
        nodeLabel.textContent = project.name;
        node.appendChild(nodeLabel);
        
        node.style.left = project.position.x + 'px';
        node.style.top = project.position.y + 'px';
        
        node.addEventListener('click', () => showProjectDetails(project));
        
        roadmapEl.appendChild(node);
        
        // Create book for library view
        const book = document.createElement('div');
        book.className = `book ${project.status}`;
        book.setAttribute('data-id', project.id);
        
        const bookTitle = document.createElement('div');
        bookTitle.className = 'book-title';
        bookTitle.textContent = project.name;
        
        book.appendChild(bookTitle);
        book.addEventListener('click', () => showProjectDetails(project));
        
        libraryEl.appendChild(book);
    });

    // Draw connections for roadmap with enhanced design for sequential flow
    function drawConnections() {
        // Remove existing connections
        document.querySelectorAll('.connector').forEach(el => el.remove());
        
        // Draw new connections
        connections.forEach(conn => {
            const fromNode = document.getElementById(conn.from);
            const toNode = document.getElementById(conn.to);
            
            if (fromNode && toNode) {
                const fromRect = fromNode.getBoundingClientRect();
                const toRect = toNode.getBoundingClientRect();
                const roadmapRect = roadmapEl.getBoundingClientRect();
                
                // Calculate positions relative to the roadmap
                const fromX = fromRect.left + fromRect.width/2 - roadmapRect.left + roadmapEl.scrollLeft;
                const fromY = fromRect.top + fromRect.height/2 - roadmapRect.top + roadmapEl.scrollTop;
                const toX = toRect.left + toRect.width/2 - roadmapRect.left + roadmapEl.scrollLeft;
                const toY = toRect.top + toRect.height/2 - roadmapRect.top + roadmapEl.scrollTop;
                
                // Create line element
                const line = document.createElement('div');
                line.className = `connector ${conn.type}`;
                
                // Calculate line properties
                const length = Math.sqrt(Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2));
                const angle = Math.atan2(toY - fromY, toX - fromX) * 180 / Math.PI;
                
                // Set line position and dimensions
                line.style.width = length + 'px';
                line.style.height = conn.type === 'main' ? '3px' : '2px';
                line.style.left = fromX + 'px';
                line.style.top = fromY + 'px';
                line.style.transform = `rotate(${angle}deg)`;
                line.style.transformOrigin = '0 0';
                
                // Add arrow head for the main flow
                if (conn.type === 'main') {
                    const arrow = document.createElement('div');
                    arrow.className = 'arrow-head';
                    
                    // Position the arrow at the end of the line
                    const arrowX = toX - 10 * Math.cos(angle * Math.PI / 180);
                    const arrowY = toY - 10 * Math.sin(angle * Math.PI / 180);
                    
                    arrow.style.left = arrowX + 'px';
                    arrow.style.top = arrowY + 'px';
                    arrow.style.transform = `rotate(${angle + 90}deg)`;
                    
                    roadmapEl.appendChild(arrow);
                }
                
                roadmapEl.appendChild(line);
            }
        });
    }

    // Initial connection drawing with a longer delay to ensure DOM is ready
    setTimeout(drawConnections, 500);
    
    // Update connections on window resize
    window.addEventListener('resize', drawConnections);

    // Toggle between roadmap and library views
    btnRoadmap.addEventListener('click', () => {
        btnRoadmap.classList.add('active');
        btnLibrary.classList.remove('active');
        roadmapView.classList.remove('hidden');
        libraryView.classList.add('hidden');
        setTimeout(drawConnections, 300);
    });
    
    btnLibrary.addEventListener('click', () => {
        btnLibrary.classList.add('active');
        btnRoadmap.classList.remove('active');
        libraryView.classList.remove('hidden');
        roadmapView.classList.add('hidden');
    });

    // Back button functionality
    backButton.addEventListener('click', () => {
        projectTitleEl.textContent = 'Select a project to view details';
        projectContentEl.innerHTML = '<p>Click on any project in the roadmap or library to view its details, status, and progress.</p>';
        backButtonContainer.classList.add('hidden');
        
        // Reset all nodes/books highlighting
        document.querySelectorAll('.project-node').forEach(node => {
            node.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        });
        
        document.querySelectorAll('.book').forEach(book => {
            book.style.boxShadow = '2px 2px 5px rgba(0,0,0,0.2)';
        });
    });

    // Show project details
    function showProjectDetails(project) {
        projectTitleEl.textContent = project.name;
        
        // Build content HTML
        let contentHTML = `
            <div class="detail-section">
                <h3>Status</h3>
                <div class="status-badge ${project.status === 'completed' ? 'green' : project.status === 'in-progress' ? 'blue' : 'red'}">
                    ${project.status === 'completed' ? 'Completed' : project.status === 'in-progress' ? 'In Progress' : 'Not Started'}
                </div>
            </div>
            
            <div class="detail-section">
                <h3>Description</h3>
                <p>${project.description}</p>
            </div>
            
            <div class="detail-section">
                <h3>Publication</h3>
                <p>${project.publication}</p>
            </div>
            
            <div class="detail-section">
                <h3>Contributors</h3>
                <p>${project.contributors.join(', ')}</p>
            </div>
            
            <div class="detail-section">
                <h3>Timeline</h3>
                <div class="timeline-item">
                    <p>${project.timeline}</p>
                </div>
            </div>
            
            <div class="detail-section">
                <h3>Analysis</h3>
                <div class="pros-cons">
                    <div class="pros">
                        <h4>Pros</h4>
                        <ul>
                            ${project.pros.map(pro => `<li>${pro}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="cons">
                        <h4>Cons</h4>
                        <ul>
                            ${project.cons.map(con => `<li>${con}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="detail-section">
                <h3>Next Steps</h3>
                <ul>
                    ${project.nextSteps.map(step => `<li>${step}</li>`).join('')}
                </ul>
            </div>
        `;
        
        projectContentEl.innerHTML = contentHTML;
        backButtonContainer.classList.remove('hidden');
        
        // Highlight the selected project
        document.querySelectorAll('.project-node').forEach(node => {
            node.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        });
        
        document.querySelectorAll('.book').forEach(book => {
            book.style.boxShadow = '2px 2px 5px rgba(0,0,0,0.2)';
        });
        
        // Highlight selected project in roadmap
        const selectedNode = document.getElementById(project.id);
        if (selectedNode) {
            selectedNode.style.boxShadow = '0 0 15px rgba(0, 120, 255, 0.7)';
        }
        
        // Highlight selected book in library
        const selectedBook = document.querySelector(`.book[data-id="${project.id}"]`);
        if (selectedBook) {
            selectedBook.style.boxShadow = '0 0 15px rgba(0, 120, 255, 0.7)';
        }
        
        // Scroll to top of details
        window.scrollTo({
            top: document.getElementById('projectDetailsTop').offsetTop - 20,
            behavior: 'smooth'
        });
    }
    
    // Add scroll-to-top behavior after page load
    window.addEventListener('load', function() {
        // Draw connections again after everything is loaded
        drawConnections();
    });
});