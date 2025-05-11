import { RowsPhotoAlbum } from 'react-photo-album';
import Photos from '../components/Photos.js';
import "react-photo-album/rows.css";

function PhotoAlbum() {

    return (
        <RowsPhotoAlbum 
        photos={Photos}
        columns={4}
        defaultContainerWidth={800}
        rowConstraints={{ maxPhotos: 5 }}
         />
    );
}

export default PhotoAlbum;