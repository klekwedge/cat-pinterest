/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Button, Card, Flex, Image } from '@mantine/core';
import { useEffect, useState } from 'react';
import ICat from '../../types';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { addCatToFavourite, fetchCats, removeCatFromFavourite } from '../../slices/catsSlice/catsSlice';

function MainPage() {
  const dispatch = useAppDispatch();

  const { cats, favouriteCats } = useAppSelector((state) => state.cats);
  const [page, setPage] = useState(1);

  const addToFavourite = (cat: ICat) => {
    if (!favouriteCats.find((favouriteCat) => favouriteCat.id === cat.id)) {
      dispatch(addCatToFavourite(cat));
    }
  };

  const removeFromFavourite = (cat: ICat) => {
    dispatch(removeCatFromFavourite(cat));
  };

  const showModalByScroll = () => {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      setPage((value) => value + 1);
    }
  };

  useEffect(() => {
    dispatch(fetchCats(page));
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', showModalByScroll);

    return () => {
      window.removeEventListener('scroll', showModalByScroll);
    };
  }, []);

  return (
    <main className="page">
      <section className="page__cats cats">
        <div className="cats__container _container">
          <Flex align="center" justify="center" wrap="wrap" gap="20px">
            {cats.map((cat) => (
              <Card className="cats__item" key={cat.id} shadow="sm" padding="10px" radius="md" withBorder>
                <Card.Section>
                  <Image src={cat.url} alt="cat" width="100%" height="160px" fit="cover" />
                </Card.Section>
                {favouriteCats.includes(cat) ? (
                  <Button
                    display="block"
                    mr="auto"
                    variant="light"
                    color="blue"
                    mt="md"
                    radius="md"
                    onClick={() => removeFromFavourite(cat)}
                  >
                    UnLike
                  </Button>
                ) : (
                  <Button
                    display="block"
                    ml="auto"
                    variant="light"
                    color="blue"
                    mt="md"
                    radius="md"
                    onClick={() => addToFavourite(cat)}
                  >
                    Like
                  </Button>
                )}
              </Card>
            ))}
          </Flex>
        </div>
      </section>
    </main>
  );
}

export default MainPage;
