/**
 * Kunjungan1.js
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

    checkup_location: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    anamnesis_complain: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 64
    },

    anamnesis_dietary_habit: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 64
    },

    anamnesis_rest_habit: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 64
    },

    anamnesis_sexual_habit: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 64
    },

    anamnesis_physical_activity: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 64
    },

    physical_exam_result_height: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 3
    },

    physicalExamResult_weight: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 3
    },

    physicalExamResult_upperArmCircle: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 3
    },

    physicalExamResult_bloodPressure: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 3
    },

    physicalExamResult_temperature: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 3
    },

    physicalExamResult_pulse: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    physicalExamResult_respiratory: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    physicalExamResult_conjunctiva: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    physicalExamResult_sclera: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    physicalExamResult_facial_edema: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    physicalExamResult_dental_oral_health: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    physicalExamResult_thyroid_glands: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    physicalExamResult_lymph_glands: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    physicalExamResult_jugular_vein: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    physicalExamResult_breast: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    physicalExamResult_breastNipple: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    physicalExamResult_stomach_enlargement: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    physicalExamResult_surgery_scars: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    physicalExamResult_palpate_leopold1_uterine_fundal_height: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    physicalExamResult_palpate_leopold1_found_on_fundal: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    physicalExamResult_palpate_leopold2: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    physicalExamResult_palpate_leopold3: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    physicalExamResult_palpate_leopold3_onHeadShaken: {
      type: 'string',
      required: false,
      minLength: 1,
      maxLength: 32
    },

    physicalExamResult_palpate_leopold4: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },


    physicalExamResult_extremity: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },


    physicalExamResult_vulvar_vaginal_conditions: {
      type: 'string',
      required: false,
      minLength: 1,
      maxLength: 32
    },

    supportingExamResult_hemoglobin_level: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    supportingExamResult_hemoglobin_level: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    supportingExamResult_urine_glucose: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    supportingExamResult_HbSAG: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    supportingExamResult_hiv_rapidtest: {
      type: 'string',
      required: false,
      minLength: 1,
      maxLength: 12
    },

    supportingExamResult_usg_result: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 64
    },

    supporting_exam_other_exam_result: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 64
    },

    problem_analysis: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 64
    },

    management_blood_booster_tablets: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    management_TT_immunization_status: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    management_counseling: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    management_doctor_service: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
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

