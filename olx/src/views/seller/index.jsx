import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import './index.css'
import Swal from 'sweetalert2';
import Map from './map';
import { display } from '@mui/system';

function SellProduct() {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
    const [title, setTitle] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState([]);
    const [map, setMap] = useState(false)
    const [location, setLocation] = useState({ lat: null, lon: null });
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
            // Uplo

            // Add product details to Firestore only if there is an image uploaded
            if (imageURL.length > 0) {
                const productData = {
                    title,
                    brand,
                    price,
                    description,
                    category,
                    location,
                    imageURL,
                };
                const docRef = await addDoc(collection(db, 'Products'), productData);
                navigate('/')
            } else {
            }
        } catch (error) {
        }
    };
    const handleLocationUpdate = (lat, lon) => {
        setLocation({ lat, lon });
        setMap(false)
    };


    return (
        <div>
            {!map
                ?
                <div className='backGround'>
                    <div className='mainCon'>
                        <div onClick={() => { navigate("/") }} className="deleteIcon"><i className="fa-solid fa-xmark"></i></div>
                        <div className="content">
                            <div className="logo">
                                <img className="LoginImg" src="/olx_logo_Big-removebg-preview.png" />
                                <h4>Post Your AD <i>NOW!</i></h4>
                            </div>
                            <div className="form">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className='form-control'
                                        id="title"
                                        placeholder="Enter title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className='form-control'
                                        id="brand"
                                        placeholder="Enter brand"
                                        value={brand}
                                        onChange={(e) => setBrand(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form">
                                <div className="input-group">
                                    <input
                                        type="number"
                                        className='form-control'
                                        id="price"
                                        placeholder="Enter price"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form">
                                <div class="input-group">
                                    <select class="form-select" id="category" value={category}
                                        style={{ width: '207px' }}
                                        className='form-control'
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <option selected>Category</option>
                                        <option value="mobile">Mobile</option>
                                        <option value="vehicles">Vehicles</option>
                                        <option value="sale">Property for sale</option>
                                        <option value="rent">Property for rent</option>
                                        <option value="electronics">Electronic & Home Appliances</option>
                                        <option value="bikes">Bikes</option>
                                        <option value="industrial">Business Industrial & Agriculture</option>
                                        <option value="services">Services</option>
                                        <option value="jobs">Jobs</option>
                                        <option value="animals">Animals</option>
                                        <option value="furniture">Furniture & Home Decor</option>
                                        <option value="fashion">Fashion & Beauty</option>
                                        <option value="books">Books, Sports & Hobby</option>
                                        <option value="kids">Kids</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form">
                                <div className="input-group">
                                    <input
                                        id="description"
                                        placeholder="Enter description"
                                        className='form-control'
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form">
                                <div className="input-group">
                                    <button className='btn btn-primary'
                                        onClick={() => { setMap(true) }}
                                    >
                                        Select Location
                                    </button>
                                </div>
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
                                        <button className='btn btn-primary' onClick={handleImageUpload()}>Upload Image</button>
                                    </div>
                                )}
                            </div>
                            <button onClick={handleSellProduct} className="btn btn-primary">Sell</button>
                        </div>
                    </div>

                </div>
                :
                <div>
                    <Map location={location} onLocationUpdate={handleLocationUpdate} />
                </div>
            }
        </div>
    );
}

export default SellProduct;
