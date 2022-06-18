/**
 * Persalinan_kala1.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    date: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    hospital_location: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    kala1_subjectiveData_keadaanUmum: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    kala1_subjectiveData_kesadaran: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    kala1_subjectiveData_statusEmosiaonal: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    kala1_subjectiveData_mulesDirasakanSejak: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    kala1_subjectiveData_pengeluaran: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    kala1_subjectiveData_umurKehamilan: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    kala1_subjectiveData_gerakanJanin: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    kala1_objectiveData_physicalExam_tinggiBadan: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 3
    },

    kala1_objectiveData_physicalExam_beratBadan: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 3
    },

    kala1_objectiveData_physicalExam_LingkarLenganAtas: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 3
    },

    kala1_objectiveData_physicalExam_tekananDarah: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 3
    },

    kala1_objectiveData_physicalExam_suhu: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 3
    },

    kala1_objectiveData_physicalExam_nadi: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 3
    },

    kala1_objectiveData_physicalExam_pernafasan: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 3
    },

    kala1_objectiveData_physicalExam_conjungtiva: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    kala1_objectiveData_physicalExam_sklera: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    kala1_objectiveData_physicalExam_udemaWajah: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    kala1_objectiveData_physicalExam_kesehatanGigiDanMulut: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    kala1_objectiveData_physicalExam_kelenjarTrioid: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    kala1_objectiveData_physicalExam_kelenjarLimfe: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    kala1_objectiveData_physicalExam_venaJugularis: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    kala1_objectiveData_physicalExam_payudara: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    kala1_objectiveData_physicalExam_puting: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    kala1_objectiveData_physicalExam_pembesaranPerut: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    kala1_objectiveData_physicalExam_lukaBekasOperasi: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    kala1_objectiveData_physicalExam_leopold1_tinggiFundusUteri: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 3
    },

    kala1_objectiveData_physicalExam_leopold1_terabaPadaFundus: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    kala1_objectiveData_physicalExam_leopold2: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    kala1_objectiveData_physicalExam_leopold3: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    kala1_objectiveData_physicalExam_leopold3_kepalaBisaDigoyangkan: {
      type: 'string',
      required: false,
      minLength: 1,
      maxLength: 32
    },

    kala1_objectiveData_physicalExam_leopold4: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    kala1_objectiveData_physicalExam_ekstrimitas: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    kala1_objectiveData_physicalExam_tfuMcDonald: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 3
    },

    kala1_objectiveData_physicalExam_tafsiranBeratBadanJanin: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 5
    },

    kala1_objectiveData_physicalExam_his: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    kala1_objectiveData_physicalExam_his_jumlahFrekuensi: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 3
    },

    kala1_objectiveData_physicalExam_his_durasiFrekuensi: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 3
    },

    kala1_objectiveData_physicalExam_auskultasiDjj: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    kala1_objectiveData_physicalExam_genetaliaDanAnus_vulva: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    kala1_objectiveData_physicalExam_genetaliaDanAnus_pengeluaran: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    kala1_objectiveData_physicalExam_genetaliaDanAnus_pengeluaran_berupa: {
      type: 'string',
      required: false,
      minLength: 1,
      maxLength: 32
    },

    kala1_objectiveData_physicalExam_genetaliaDanAnus_vagina: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    kala1_objectiveData_physicalExam_genetaliaDanAnus_vagina_nyeriPadaBagian: {
      type: 'string',
      required: false,
      minLength: 1,
      maxLength: 32
    },

    kala1_objectiveData_physicalExam_genetaliaDanAnus_konsistensiPortio: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    kala1_objectiveData_physicalExam_genetaliaDanAnus_konsistensiPortio_dilatasi: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    kala1_objectiveData_physicalExam_genetaliaDanAnus_konsistensiPortio_penipisan: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    kala1_objectiveData_physicalExam_genetaliaDanAnus_selaputKetuban: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    kala1_objectiveData_physicalExam_genetaliaDanAnus_moulage: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 3
    },

    kala1_objectiveData_physicalExam_genetaliaDanAnus_penurunan: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    kala1_objectiveData_physicalExam_genetaliaDanAnus_penurunan_hodge: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    kala1_objectiveData_physicalExam_genetaliaDanAnus_bagianKecil: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    kala1_objectiveData_physicalExam_genetaliaDanAnus_taliPusat: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    kala1_objectiveData_physicalExam_genetaliaDanAnus_taliPusat_denyutan: {
      type: 'string',
      required: false,
      minLength: 1,
      maxLength: 12
    },

    kala1_objectiveData_physicalExam_genetaliaDanAnus_pemeriksaanPanggul: {
      type: 'string',
      required: false,
      minLength: 1,
      maxLength: 32
    },

    kala1_objectiveData_physicalExam_genetaliaDanAnus_promotorium: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    kala1_objectiveData_physicalExam_genetaliaDanAnus_conjungtaDogonalis: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    kala1_objectiveData_physicalExam_genetaliaDanAnus_conjungtaVera: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    kala1_objectiveData_physicalExam_genetaliaDanAnus_conjungtaDogonalis: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    kala1_objectiveData_physicalExam_genetaliaDanAnus_dindingPanggul: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    kala1_patografMelewatiGarisWaspada: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    kala1_analisaMasalahKebutuhan: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 100
    },

    kala1_penatalaksanaan: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 100
    },

    kala1_evaluasi: {
      type: 'string',
      required: false,
      minLength: 1,
      maxLength: 100
    },
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

