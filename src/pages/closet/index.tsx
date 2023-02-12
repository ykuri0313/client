import useClosetPage from "../../hooks/pages/useClosetPage";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Container,
  Spinner,
  Text,
  Image,
  Spacer,
  Button,
} from "@chakra-ui/react";

const Closet = () => {
  const { closetState, toPropertyEdit } = useClosetPage();
  return (
    <>
      {closetState == undefined || closetState.status == "loading" ? (
        <>
          <Box textAlign="center" mt="20%">
            <Spinner size="lg" />
            <Text mt="8">Now Loading...</Text>
          </Box>
        </>
      ) : closetState.status == "error" ? (
        <>
          <Text>エラーが発生しました</Text>
        </>
      ) : (
        <Container maxW="70%" mt="10">
          {closetState.data.map((property) => {
            return (
              <Accordion defaultIndex={[1]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Text fontSize="2xl" fontWeight="bold">
                          {property.name}
                        </Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Flex>
                      <Text>{property.isPurchasable && "購入可能"}</Text>
                      <Spacer />
                      <Button onClick={() => toPropertyEdit(property.id)}>
                        編集
                      </Button>
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            );
          })}
        </Container>
      )}
    </>
  );
};

export default Closet;
