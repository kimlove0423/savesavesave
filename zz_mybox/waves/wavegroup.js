import { Wave } from "./wave.js";

export class WaveGroup {
    constructor(){
        this.totalWaves = 3;
        this.totalPoints = 6;

        // this.color = ['rgba(0,199,235,0.4)', 'rgba(0,199,235,0.4)', 'rgba(0,199,235,0.4)'];
        this.color = ['rgba(0,199,235,0.4)', 'rgba(0,146,199,0.4)', 'rgba(0,87,158,0.4)'];

        this.waves = [];
        
        // var 는 변수 재선언이 허용되지만 let과 const는 변수 재선언 불가
        for(let i = 0; i<this.totalWaves; i++){
            const wave = new Wave(
                i,
                this.totalPoints,
                this.color[i],
            );
            this.waves[i] = wave;
        }
    }

    resize(stageWidth, stageHeight){
        for(let i = 0; i < this.totalWaves; i++){
            const wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);
        }
    }

    draw(ctx){
        for(let i = 0; i < this.totalWaves; i++){
            const wave = this.waves[i];
            wave.draw(ctx);
        }
    }
}