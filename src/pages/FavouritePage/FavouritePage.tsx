import { Button, Card, Flex, Image } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { removeCatFromFavourite } from '../../slices/catsSlice/catsSlice';
import ICat from '../../types';

function FavouritePage() {
  const { favouriteCats } = useAppSelector((state) => state.cats);
  const dispatch = useAppDispatch();

  const removeFromFavourite = (cat: ICat) => {
    dispatch(removeCatFromFavourite(cat));
  };

  return (
    <main className="page">
      <section className="page__cats cats">
        <div className="cats__container _container">
          <Flex align="center" justify="center" wrap="wrap" gap="20px">
            {favouriteCats.map((cat) => (
              <Card className="cats__item" key={cat.id} shadow="sm" padding="10px" radius="md" withBorder>
                <Card.Section>
                  <Image src={cat.url} alt="cat" width="100%" height="160px" fit="cover" />
                </Card.Section>
                <Button
                  display="block"
                  ml="auto"
                  variant="light"
                  color="blue"
                  mt="md"
                  radius="md"
                  onClick={() => removeFromFavourite(cat)}
                >
                  Unlike
                </Button>
              </Card>
            ))}
          </Flex>
        </div>
      </section>
    </main>
  );
}

export default FavouritePage;
