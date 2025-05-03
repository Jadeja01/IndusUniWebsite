import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    _id:{
        type : String,
        require : true
    },
    subject: {
        type: String,
        required: true,
    },
    pyqs:{
        type: Array,
        require:true
    },
    assignments:{
        type: Array,
        require:true
    },
    semester: {
        type: Number,
        required: true,
    },
    syllabus: {
        type: String,
        required: true,
    }
});

const dataSchema =mongoose.models.materials || mongoose.model('materials', schema);

export default dataSchema;