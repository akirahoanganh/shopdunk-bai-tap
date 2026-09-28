const sanPham = [
    { ten: 'iPhone 17 Pro Max', loai: 'iPhone', anh: 'iphone-pro-max.png', gia: 34990000, mota: 'Điện thoại màn hình lớn, phù hợp chụp ảnh và giải trí.' },
    { ten: 'iPhone 17 Pro', loai: 'iPhone', anh: 'iphone-pro.png', gia: 29990000, mota: 'Điện thoại dòng Pro với thiết kế gọn hơn.' },
    { ten: 'iPad Pro M5', loai: 'iPad', anh: 'ipad-pro.png', gia: 27990000, mota: 'Máy tính bảng phục vụ học tập, vẽ và làm việc.' },
    { ten: 'iPad A16', loai: 'iPad', anh: 'ipad.png', gia: 9990000, mota: 'Máy tính bảng cho học online và giải trí hằng ngày.' },
    { ten: 'MacBook Air M4', loai: 'Mac', anh: 'macbook.jpeg', gia: 24990000, mota: 'Máy tính xách tay mỏng nhẹ, thuận tiện mang theo.' },
    { ten: 'Apple Watch SE 3', loai: 'Watch', anh: 'watch.jpeg', gia: 6490000, mota: 'Đồng hồ thông minh hỗ trợ theo dõi vận động.' },
    { ten: 'AirPods 4', loai: 'Am thanh', anh: 'airpods.jpeg', gia: 3490000, mota: 'Tai nghe không dây dùng để nghe nhạc và gọi điện.' }
];
let loaiDangChon = 'tat-ca';
const oTimKiem = document.getElementById('tu-khoa');
const danhSach = document.getElementById('danh-sach-san-pham');
const hopChiTiet = document.getElementById('chi-tiet');
function hienSanPham() {
    danhSach.innerHTML = '';
    const tuKhoa = oTimKiem.value.trim().toLowerCase();
    let soKetQua = 0;
    sanPham.forEach(function (sp, viTri) {
        if ((loaiDangChon === 'tat-ca' || sp.loai === loaiDangChon) && sp.ten.toLowerCase().includes(tuKhoa)) {
            const the = document.createElement('article');
            the.className = 'the-san-pham';
            the.innerHTML = '<img src="images/' + sp.anh + '" alt="' + sp.ten + '">' +
                '<h3>' + sp.ten + '</h3><p class="gia">' + sp.gia.toLocaleString('vi-VN') + ' ₫</p>' +
                '<button type="button">Xem chi tiết</button>';
            the.querySelector('button').onclick = function () { xemChiTiet(viTri); };
            danhSach.appendChild(the);
            soKetQua++;
        }
    });
    document.getElementById('khong-tim-thay').hidden = soKetQua !== 0;
    document.getElementById('ket-qua-tim').textContent = soKetQua + ' sản phẩm';
}
function chonLoai(loai) {
    loaiDangChon = loai;
    document.querySelectorAll('[data-loai]').forEach(function (nut) {
        const duocChon = nut.dataset.loai === loai;
        nut.classList.toggle('dang-chon', duocChon);
        nut.setAttribute('aria-pressed', duocChon);
    });
    hienSanPham();
}
document.querySelectorAll('[data-loai]').forEach(function (nut) {
    nut.onclick = function () { chonLoai(nut.dataset.loai); };
});
document.getElementById('form-tim-kiem').onsubmit = function (suKien) {
    suKien.preventDefault();
    hienSanPham();
    document.getElementById('san-pham').scrollIntoView();
};
oTimKiem.oninput = hienSanPham;
document.getElementById('xem-tat-ca').onclick = function () {
    oTimKiem.value = '';
    chonLoai('tat-ca');
};
function xemChiTiet(viTri) {
    const sp = sanPham[viTri];
    document.getElementById('ten-chi-tiet').textContent = sp.ten;
    document.getElementById('anh-chi-tiet').src = 'images/' + sp.anh;
    document.getElementById('anh-chi-tiet').alt = sp.ten;
    document.getElementById('mo-ta-chi-tiet').textContent = sp.mota;
    hopChiTiet.showModal();
}
document.getElementById('dong-chi-tiet').onclick = function () { hopChiTiet.close(); };
const banner = [0, 2, 4];
let viTriBanner = 0;
function doiBanner(buoc) {
    viTriBanner = (viTriBanner + buoc + banner.length) % banner.length;
    const sp = sanPham[banner[viTriBanner]];
    document.getElementById('ten-banner').textContent = sp.ten;
    document.getElementById('mo-ta-banner').textContent = sp.mota;
    document.getElementById('anh-banner').src = 'images/' + sp.anh;
    document.getElementById('anh-banner').alt = sp.ten;
    document.getElementById('vi-tri-banner').textContent = (viTriBanner + 1) + ' / 3';
}
document.getElementById('banner-truoc').onclick = function () { doiBanner(-1); };
document.getElementById('banner-sau').onclick = function () { doiBanner(1); };
document.getElementById('xem-banner').onclick = function () {
    oTimKiem.value = '';
    chonLoai(sanPham[banner[viTriBanner]].loai);
};
hienSanPham();
