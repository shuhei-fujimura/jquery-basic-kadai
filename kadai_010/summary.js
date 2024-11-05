$('#change-color').on('click', () => {
    $('#target').css('color','blue');
});
$('#change-text').on('click', () => {
    $('#target').text('hello!');
});
$('#fade-out').on('click', () => {
    $('#target').fadeOut();
});
$('#fade-in').on('click', () => {
    $('#target').fadeIn();
});