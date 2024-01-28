import Work from '@images/work.png';
import { Box, Typography, ImageList, ImageListItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import usePicturesStyle from './PicturesSection.style';
import { useState } from 'react';

const DashboardSection = () => {
    const { classes } = usePicturesStyle();
    const { t } = useTranslation();
    const [pictures, setPictures] = useState([]);

    function srcset(image: string, size: number, rows = 1, cols = 1) {
        return {
          src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
          srcSet: `${image}?w=${size * cols}&h=${
            size * rows
          }&fit=crop&auto=format&dpr=2 2x`,
        };
      }

      const fetchData = async() => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/photos');
            const jsonData = await response.json();
            setPictures(jsonData);
        }
        catch (error){
            console.error('Error fetching data:', error);
        }
      }

      fetchData();

       
    return (
        <Box className={classes.container}>
            <ImageList
                sx={{ width: 1000, height: 850 }}
                variant="quilted"
                cols={4}
                rowHeight={121}
                >
                {pictures.map((item) => (
                    <ImageListItem key={item.url} cols={item.cols || 1} rows={item.rows || 1}>
                        <img
                            {...srcset(item.url, 121, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
};

export default DashboardSection;
