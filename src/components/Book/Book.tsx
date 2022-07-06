import {IBook} from "../../models/Response/IBook";
import {FC} from "react";
import {Button, Card, CardActions, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { CardActionArea } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface IBookProps {
    book: IBook
}

export const Book: FC<IBookProps> = ({book}) => {
    return (
            <Card sx={{ width: 200, height: 270 }}>
                <CardActionArea sx={{height:270, width: 200}} component={RouterLink} to={`books/${book.id}`} >
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={book.img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {book.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {
                        book.description
                    }
                </Typography>
            </CardContent>
                </CardActionArea>
        </Card>
    );

}








