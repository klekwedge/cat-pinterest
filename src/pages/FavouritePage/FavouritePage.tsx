function FavouritePage() {
  return (
    <main className="page">
      <section className="page__cats cats">
        <div className="cats__container _container">
          {/* <Flex align="center" justify="center" wrap="wrap" gap="20px">
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
          </Flex> */}
        </div>
      </section>
    </main>
  );
}

export default FavouritePage;
