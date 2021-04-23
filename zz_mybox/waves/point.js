export class Point {
    constructor(index, x, y){
        this.x = x;
        this.y = y;
        this.fixedY = y;
        this.speed = 0.05; //포인트의 속도
        this.cur = index; //인덱스값을 전달
        this.max = Math.random() * 100 + 150; //폭의설정
    }

    update() {
        this.cur += this.speed;
        this.y = this.fixedY + (Math.sin(this.cur)*this.max);
    }
}