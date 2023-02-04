import { AddOutlined, RemoveOutlined } from "@mui/icons-material";
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Stack, Typography } from "@mui/material";
import "./ProductCard.css"
const ProductCard = ({ product, cartQty, handleAddToCart }) => {

    return (
        <Card className="card" style={{ boxShadow: '1px 2px 9px grey', }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={product.imageURL}
                    width={"100%"}
                    height={"100%"}
                />
                <CardContent>
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography variant="subtitle1">
                        Rs {product.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className="card-actions">
                {cartQty === 0 ? (
                    <Button
                        color="inherit"
                        variant="contained"
                        className="card-button"
                        fullWidth
                        onClick={() => handleAddToCart(product, 1)}
                    >
                        ADD TO CART
                    </Button>) : (
                    <Stack direction="row" alignItems="center" justifyContent={"center"} width="100%">
                        <IconButton size="small" color="inherit" onClick={() => handleAddToCart(product, cartQty - 1)} >
                            <RemoveOutlined />
                        </IconButton>
                        <Box padding="0.5rem">
                            {cartQty}
                        </Box>
                        <IconButton size="small" color="inherit" onClick={() => handleAddToCart(product, cartQty + 1)}>
                            <AddOutlined />
                        </IconButton>
                    </Stack>
                )}
            </CardActions>
        </Card>
    );
}

export default ProductCard;