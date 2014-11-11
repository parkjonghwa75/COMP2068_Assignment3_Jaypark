/// <reference path="../managers/asset.ts" />
module objects {
    // Cloud class
    export class Cloud {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dy: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("cloud"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            game.addChild(this.image);
        }

        update() {
            this.image.x -= this.dx;
            if (this.image.x <= -this.width) {
                this.reset();
            }
        }

        reset() {
            this.image.x = 1000;
            this.image.y = Math.floor(Math.random() * stage.canvas.height);
            this.dx = Math.floor(Math.random() * 10 + 1);
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}