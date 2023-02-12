import PropertyCard from "@/components/property/propertyCard";
import usePropertiesPage from "@/hooks/pages/usePropertiesPage";
import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ReactIcon } from "@chakra-ui/icons";

const PropertiesList = () => {
  const { propertyState, toPropertyDetail } = usePropertiesPage();
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
        <Container maxW="80%" mt="10">
          <Flex ml="3" mb="5">
            <Heading as="h4" size="md">
              マーケット
            </Heading>
          </Flex>
          <SimpleGrid columns={5} spacing={2}>
            {propertyState.data.map((property) => {
              return (
                <PropertyCard
                  propertyId={property.id}
                  propertyName={property.name}
                  isPurchasable={property.isPurchasable}
                  imageUrl={property.imageUrl}
                  toPropertyDetail={toPropertyDetail}
                />
              );
            })}
          </SimpleGrid>
        </Container>
      )}
    </>
  );
};

export default PropertiesList;
