import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import './index.css'
import Swal from 'sweetalert2';

function SellProduct() {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
    const [title, setTitle] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState([]);
    // Add this line to import initializeApp
    const navigate = useNavigate()

    const dropzoneStyles = {
        border: '2px dashed #ccc',
        borderRadius: '4px',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
    };
    const firebaseConfig = {
        apiKey: "AIzaSyC3RUHEqKQHk5bdsMt9tMJ-Z2kR8pS8SVk",
        authDomain: "olx-app-976a5.firebaseapp.com",
        projectId: "olx-app-976a5",
        storageBucket: "olx-app-976a5.appspot.com",
        messagingSenderId: "1032679369767",
        appId: "1:1032679369767:web:5f17ac7a99fb58311af202",
        measurementId: "G-6E9V7YPQBZ"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const storage = getStorage(app);

    const handleImageUpload = async () => {
        const urls = [];

        // Iterate over all acceptedFiles
        for (const file of acceptedFiles) {
            const storageRef = ref(storage, `images/${file.name}`);
            await uploadBytes(storageRef, file);

            const url = await getDownloadURL(storageRef);
            urls.push(url);
        }

        // Set the array of image URLs in the state
        setImageURL(urls);
    };


    const handleSellProduct = async () => {
        try {
            // Upload image to Firebase Storage
            await handleImageUpload()

            // Add product details to Firestore only if there is an image uploaded
            if (imageURL.length > 0) {
                const productData = {
                    title,
                    brand,
                    price,
                    description,
                    imageURL, // Use the array of image URLs
                };
                const docRef = await addDoc(collection(db, 'Products'), productData);
                navigate('/')
            } else {
            }
        } catch (error) {
        }
    };

    return (
        <div className='backGround'>
            <div className='mainCon'>
                <div onClick={() => { navigate("/") }} className="deleteIcon"><i className="fa-solid fa-xmark"></i></div>
                <div className="content">
                    <div className="logo">
                        <img className="LoginImg" src="src/views/NavBar/brandIconLogin_noinline.93e8a1a9cf50902ba5250814f57810ff.svg" />
                        <h4>Post Your AD <i>NOW!</i></h4>
                    </div>
                    <div className="form">
                        <input
                            type="text"
                            id="title"
                            placeholder="Enter title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="form">
                        <input
                            type="text"
                            id="brand"
                            placeholder="Enter brand"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                        />
                    </div>
                    <div className="form">
                        <input
                            type="number"
                            id="price"
                            placeholder="Enter price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="form">
                        <input
                            id="description"
                            placeholder="Enter description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div {...getRootProps()} style={dropzoneStyles}>
                        <input type='file' multiple {...getInputProps()} />
                        <div className="file-upload-label">
                            <div className="file-upload-design">
                                <p>Drag and Drop</p>
                                <p>or</p>
                                <span className="browse-button">Browse file</span>
                            </div>
                        </div>

                        {acceptedFiles.length > 0 && (
                            <div className='files'>
                                <h4>Files:</h4>
                                <ul>
                                    {acceptedFiles.map((file) => (
                                        <li key={file.path}>
                                            {file.name} - {file.size / 1024} KB
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <button onClick={handleSellProduct} className="btn btn-primary">Sell</button>
                </div>
            </div>
        </div>
    );
}

export default SellProduct;
