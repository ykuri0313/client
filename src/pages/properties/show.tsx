import usePropertyPage from "../../hooks/pages/usePropertyPage";
import { useRouter } from "next/router";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Stack,
  StackDivider,
  Text,
  Image,
  Flex,
  Button,
  Spinner,
} from "@chakra-ui/react";

const PropertyDetail = () => {
  const router = useRouter();
  const { propertyState } = usePropertyPage(router.query.propertyId);
  return (
    <>
      {propertyState == undefined || propertyState.status == "loading" ? (
        <>
          <Box textAlign="center" mt="20%">
            <Spinner size="lg" />
            <Text mt="8">Now Loading...</Text>
          </Box>
        </>
      ) : propertyState.status == "error" ? (
        <>
          <Text>エラーが発生しました</Text>
        </>
      ) : (
        <Container my="10">
          <Card>
            <CardHeader>
              <Heading size="md">{propertyState.data.name}</Heading>
            </CardHeader>
            <Image src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"></Image>
            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    レンタル期間
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {propertyState.data.rentalPeriod}日間
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    価格
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {propertyState.data.price}円
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    購入
                  </Heading>
                  {propertyState.data.isPurchasable ? (
                    <Text pt="2" fontSize="sm">
                      レンタル期間終了後に購入することができます。
                    </Text>
                  ) : (
                    <Text pt="2" fontSize="sm">
                      レンタル期間終了後の購入はできません。
                    </Text>
                  )}
                </Box>
                <Flex justifyContent="right">
                  <Button colorScheme="teal">レンタル申請へ</Button>
                </Flex>
              </Stack>
            </CardBody>
          </Card>
        </Container>
      )}
    </>
  );
};

export default PropertyDetail;
