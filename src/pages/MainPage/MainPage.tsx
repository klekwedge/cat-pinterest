/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Button, Card, Flex, Image } from '@mantine/core';
import { useEffect, useState } from 'react';
import getData from '../../services/CatAPI';
import ICat from '../../types';

function MainPage() {
  const [cats, setCats] = useState<ICat[]>([]);
  const [page, setPage] = useState(1);
  const [favouriteCats, setFavouriteCats] = useState<ICat[]>([]);

  const addToFavourite = (cat: ICat) => {
    if (!favouriteCats.find((favouriteCat) => favouriteCat.id === cat.id)) {
      setFavouriteCats([...favouriteCats, cat]);
    }
  };

  const showModalByScroll = () => {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      setPage((value) => value + 1);
    }
  };

  useEffect(() => {
    getData(page).then((data) => setCats([...cats, ...data]));
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
              <Card
                className="cats__item"
                key={cat.id}
                shadow="sm"
                padding="10px"
                radius="md"
                withBorder
                onClick={() => addToFavourite(cat)}
              >
                <Card.Section>
                  <Image src={cat.url} alt="cat" width="100%" height="160px" fit="cover" />
                </Card.Section>
                <Button display="block" ml="auto" variant="light" color="blue" mt="md" radius="md">
                  Like
                </Button>
              </Card>
            ))}
          </Flex>
          {/* <ul className="cats__list_favourite" /> */}
        </div>
      </section>
    </main>
  );
}

export default MainPage;
