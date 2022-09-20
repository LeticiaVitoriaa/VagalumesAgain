class Vagalume {
    constructor () {
        this.x = 0;
        this.y = 0;
        this.baseX = Math.random () * innerWidth;
        this.velocidadeY = Math.random () * 4 + 2;
        this.imga = document.createElement('img');
        this.imga.src = 'images/vagalume.gif';
        this.imga.alt = 'Vagalume';
        document.querySelector('#vagalumes').appendChild(this.imga);
    }

    movimentarVagalumes () {
        this.x = this.baseX + Math.cos(this.x / 30) * 10;
        this.y += this.velocidadeY;

        if (this.y >= window.innerWidth) {
            this.baseX = Math.random() * 300;
            this.y = 0;
        }

        this.imga.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}

let vagalumes = [new Vagalume(), new Vagalume()];

setInterval(() => {
    for (let i = 0; i < vagalumes.length; i++) {
       vagalumes[i].movimentarVagalumes();
       }
}, 33);

let novoEl = document.querySelector('#botao');
    novoEl.addEventListener ('click', () => {
        vagalumes.push(new Vagalume());
});