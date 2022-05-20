class hinhTron {
    banKinh: number;
    chuVi: number;
    dienTich: number;

    constructor(banKinh: number) {
        this.banKinh = banKinh;
    }
    S(): number {
        return (this.banKinh * 3.14);
    }
    P(): number {
        return (this.banKinh * this.banKinh * 3.14);
    }

}
let hinh1 = new hinhTron(3);

class hinhTru extends hinhTron {
    chieuCao: number;
    theTich: number;
    constructor(banKinh: number, chieuCao: number) {
        super(banKinh)
        this.chieuCao = chieuCao;
    }
    V(): number {
        return this.banKinh * this.banKinh * 3.14 * this.chieuCao;
    }
}

let hinh2 = new hinhTru(3, 4);

console.log(hinh1.S());
console.log(hinh1.P());
console.log(hinh2.V());

