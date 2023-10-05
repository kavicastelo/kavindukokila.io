(function () {
    let height;

    if (window.innerWidth >= 770){
        height = window.innerHeight*.5 + 120;
    }else if(window.innerWidth >= 525 && window.innerWidth < 770){
        height = window.innerHeight*.9;
    }else if(window.innerWidth >= 450 && window.innerWidth < 525){
        height = window.innerHeight*.82;
    }else{
        height = window.innerHeight*.75;
    }

    let canvas = document.createElement("canvas"), //создаю эл-т canvas
        ctx = canvas.getContext("2d"), // генерирую контекст рисования
        w = (canvas.width = innerWidth),
        // h = (canvas.height = innerHeight*.75),
        h = (canvas.height = height),
        particles = [], // массив частиц
        properties = {
            bgColor: "#000",
            particleColor: "#48abac",
            particleRadius: 3, // радиус частицы
            particleCount: 30,
            particleMaxVelocity: 0.5, // скорость(исп. для генерации скорости по х и у)
            lineLength: 170,
            particleLife: 10 //жизненный цикл частичек(в сек)
        };
    document.querySelector("#gallery").appendChild(canvas);

    window.onresize = function () {
        w = canvas.width = innerWidth;
        h = canvas.height = innerHeight;
    };

    // определение скорости частиц, её положение и тд
    class Particle {
        constructor() {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.velocityX =
                Math.random() * (properties.particleMaxVelocity * 2) -
                properties.particleMaxVelocity; // ~ -0,5 до +0,5. От этого зависит в каком направлении будет двигатсься частичка
            this.velocityY =
                Math.random() * (properties.particleMaxVelocity * 2) -
                properties.particleMaxVelocity;
            this.life = Math.random() * properties.particleLife * 60; // 60 кол-во кадров в секунду
        }
        // метод обновляющий позицию
        position() {
            // условие для того, чтобы частицы не уходили за границы нашего окна
            (this.x + this.velocityX > w && this.velocityX > 0) ||
            (this.x + this.velocityX < 0 && this.velocityX < 0)
                ? (this.velocityX *= -1)
                : this.velocityX;
            (this.y + this.velocityY > h && this.velocityY > 0) ||
            (this.y + this.velocityY < 0 && this.velocityY < 0)
                ? (this.velocityY *= -1)
                : this.velocityY;

            this.x += this.velocityX;
            this.y += this.velocityY;
        }
        reDraw() {
            ctx.beginPath(); // метод запускает новый ауть
            ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2); // добавляет дугу к пути с центром х, у
            ctx.closePath(); // закрывает путь
            ctx.fillStyle = properties.particleColor;
            ctx.fill();
        }
        // метод отнимающий жизнь
        reCalculateLife() {
            if (this.life < 1) {
                // то пересчитываем все параметры странички заново
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.velocityX =
                    Math.random() * (properties.particleMaxVelocity * 2) -
                    properties.particleMaxVelocity; // ~ -0,5 до +0,5. От этого зависит в каком направлении будет двигатсься частичка
                this.velocityY =
                    Math.random() * (properties.particleMaxVelocity * 2) -
                    properties.particleMaxVelocity;
                this.life = Math.random() * properties.particleLife * 60;
            }
            this.life--;
        }
    }

    function reDrawBackground() {
        ctx.fillStyle = properties.bgColor;
        ctx.fillRect(0, 0, w, h);
    }

    // проверяю расстояние от одной точки до другой
    function reDrawLines() {
        let x1, y1, x2, y2, length, opacity;
        for (let i in particles) {
            for (let g in particles) {
                //присваиваю переменным координаты частиц
                x1 = particles[i].x;
                y1 = particles[i].y;
                x2 = particles[g].x;
                y2 = particles[g].y;
                // длину рассчитаю по формуле диагонали(сумма квадратов катетов)
                length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                if (length < properties.lineLength) {
                    opacity = 1 - length / properties.lineLength; // чем длиннее расстояние, тем меньше значение прозрачности
                    ctx.lineWidth = "0.5";
                    ctx.strokeStyle = `rgba(46, 113, 204, ${opacity} )`;
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.closePath();
                    ctx.stroke();
                }
            }
        }
    }

    // запорисовываем частички
    function reDrawParticles() {
        for (let i in particles) {
            particles[i].reCalculateLife();
            particles[i].position();
            particles[i].reDraw();
        }
    }

    function loop() {
        reDrawBackground();
        reDrawParticles();
        reDrawLines();
        requestAnimationFrame(loop); // метод будет вызывать loop примерно 50раз в сек
    }

    //обновление canvas
    function init() {
        // наполним массив частицами
        for (let i = 0; i < properties.particleCount; i++) {
            particles.push(new Particle());
        }
        loop(); // вызов рекурсивной функции
    }

    init();
})();
