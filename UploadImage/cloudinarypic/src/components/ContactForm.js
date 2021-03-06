import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'thangvd';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/fpt-university/upload';

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            uploadedFileCloudinaryUrl: ''
        };
    }

    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        });

        this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file);

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url
                });
            }
        });
    }


    render() {
        return (
            <div>
                <Dropzone className="btn btn-primary start"
                    multiple={false}
                    accept="image/*"
                    onDrop={this.onImageDrop.bind(this)}>
                        <p>Upload image.</p>
                    </Dropzone>
                    

                <div>
                    {this.state.uploadedFileCloudinaryUrl === '' ? null :
                        <div>
                            <p>{this.state.uploadedFile.name}</p>
                            <img src={this.state.uploadedFileCloudinaryUrl} />
                            <p>{this.state.uploadedFileCloudinaryUrl}</p>
                        </div>}
                </div>
                
            </div>
        )

    }
}



export default ContactForm;