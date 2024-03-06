document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('personalInfoForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn gửi form mặc định
        // Lấy giá trị từ các trường thông tin cá nhân
        const fullName = document.getElementById('fullName').value;
        const birthdate = document.getElementById('birthdate').value;
        const cccd = document.getElementById('cccd').value;
        const address = document.getElementById('address').value;

        // Lưu thông tin cá nhân vào local storage (hoặc có thể sử dụng cookies, session storage hoặc truyền dữ liệu thông qua URL)
        localStorage.setItem('fullName', fullName);
        localStorage.setItem('birthdate', birthdate);
        localStorage.setItem('cccd', cccd);
        localStorage.setItem('address', address);

        // Chuyển hướng sang trang khảo sát
        window.location.href = 'survey.html';
    });
});