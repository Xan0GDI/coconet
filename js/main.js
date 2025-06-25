document.addEventListener('DOMContentLoaded', () => {
    // --- Data for Avatars ---
    // To add more avatars, just add a new line to this list.
    // Make sure your image files are in the "avatars" folder.
    const avatars = [
        { name: 'Nova', image: 'avatar/avatar1.png' },
        { name: 'Yuriko', image: 'avatar/avatar2.png' },
        { name: 'Lyra', image: 'avatar/avatar3.png' },
        { name: 'Orion', image: 'avatar/avatar4.png' },
        { name: 'Ayrton', image: 'avatar/avatar5.png' },
        { name: 'Nyxen', image: 'avatar/avatar6.png' },
        { name: 'Astra', image: 'avatar/avatar7.png' },
        { name: 'Riven', image: 'avatar/avatar8.png' },
        { name: 'Ashley', image: 'avatar/avatar9.png' },
    ];

    // --- Populate Avatar Grid ---
    const avatarGrid = document.getElementById('avatar-gallery');

    if (avatarGrid) {
        avatars.forEach(avatar => {
            const card = document.createElement('div');
            card.className = 'avatar-card';

            const img = document.createElement('img');
            img.src = avatar.image;
            img.alt = `${avatar.name}'s Avatar`;
            img.className = 'avatar-image';

            const name = document.createElement('p');
            name.className = 'avatar-name';
            name.textContent = avatar.name;

            card.appendChild(img);
            card.appendChild(name);
            avatarGrid.appendChild(card);
        });
    }

    // --- Create Animated Background Elements ---
    const backgroundContainer = document.querySelector('.background-animation');
    if (backgroundContainer) {
        const numberOfShapes = 4; // Corresponds to the CSS :nth-child selectors
        for (let i = 1; i <= numberOfShapes; i++) {
            const shape = document.createElement('span');
            backgroundContainer.appendChild(shape);
        }
    }
});