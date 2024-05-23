document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('#toggle-button');
    const ul = document.querySelector('ul');
    let expanded = false;

    button.addEventListener('click', function() {
        if (!expanded) {
            const newItems = [
                { name: 'Airdrop', url: 'https://support.apple.com/pt-br/HT204144' },
                { name: 'Skype', url: 'https://www.skype.com/' },
                { name: 'Signal', url: 'https://signal.org/' },
                { name: 'Line', url: 'https://line.me/' }
            ];
            newItems.forEach(item => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = item.url;
                a.textContent = item.name;
                li.appendChild(a);
                ul.appendChild(li);
            });
            button.textContent = 'menos';
            expanded = true;
        } else {
            // Remove elementos adicionados
            for (let i = 0; i < 4; i++) {
                ul.lastChild.remove();
            }
            button.textContent = 'mais';
            expanded = false;
        }
    });
});