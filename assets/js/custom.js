/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 *
 */

"use strict";
$(document).ready(function () {
    $(".alert").fadeTo(3500, 500).slideUp(300, function () {
        $(".alert").alert('close');
    });
});

$('#modalAdd').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var title = button.data('title')
    var master = button.data('master')

    var modal = $(this)
    modal.find('.modal-title').text('Tambah ' + title)
    modal.find('#master').val(master)
});

function hapusdata(kode, nama, route) {
    Swal.fire({
    title: 'Anda Yakin Akan Menghapus ' + nama + ' ?',
    text: "Anda tidak akan dapat mengembalikan ini!",
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Ya, Hapus!'
    }).then((result) => {
    if (result.value) {
        $.ajax({
        type: 'delete',
        url: route + kode,
        // data: {_csrf: window.SAILS_LOCALS._csrf},
        beforeSend: function () {
            swal.fire({
            title: 'Tunggu...',
            html: 'Menghapus data',
            onOpen: () => {
                swal.showLoading()
            }
            });
        },
        success: function (respon) {
            if (respon == 'success') {
            swal.fire({
                title: 'Data di hapus!.',
                type: 'success',
                timer: 1500,
                showConfirmButton: false,
                onClose: () => {
                document.location = '';
                }
            });

            } else {
            swal.fire({
                title: 'Gagal menghapus.',
                type: 'warning',
                timer: 1500,
                showConfirmButton: false,
                onClose: () => {
                document.location = '';
                }
            })
            }
        }
        });
    }
    });
}

$('.bthapus').click(function (e) {
    e.preventDefault();
    var kode = $(this).data('kode');
    var nama = $(this).data('nama');
    var route = $(this).data('route');
    hapusdata(kode, nama, route);
});


$('#modalAddUser').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var title = button.data('title')
    var access = button.data('access')

    var modal = $(this)
    modal.find('.modal-title').text('Tambah ' + title)
    modal.find('#access').val(access)
    
    $.ajax({
        type: "GET",
        url: "/user/"+ access,
        //data: {_csrf: window.SAILS_LOCALS._csrf},
        success: function (response) {
            var html = '';
            for (let index = 0; index < response.length; index++) {
                html += '<option value="'+response[index].phone_number+'">'+response[index].name+'</option>';
            }
            modal.find('#username').append(html);
        }
    });
});

