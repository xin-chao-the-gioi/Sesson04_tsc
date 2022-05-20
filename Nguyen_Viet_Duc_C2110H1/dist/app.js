class hinhTron {
    constructor(banKinh) {
        this.banKinh = banKinh;
    }
    S() {
        return (this.banKinh * 3.14);
    }
    P() {
        return (this.banKinh * this.banKinh * 3.14);
    }
}
let hinh1 = new hinhTron(3);
class hinhTru extends hinhTron {
    constructor(banKinh, chieuCao) {
        super(banKinh);
        this.chieuCao = chieuCao;
    }
    V() {
        return this.banKinh * this.banKinh * 3.14 * this.chieuCao;
    }
}
let hinh2 = new hinhTru(3, 4);
console.log(hinh1.S());
console.log(hinh1.P());
console.log(hinh2.V());
