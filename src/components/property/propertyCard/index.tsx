import {
  Card,
  CardBody,
  Stack,
  Heading,
  Image,
  Text,
  Flex,
  Spacer,
  Link,
} from "@chakra-ui/react";
import React from "react";

type Props = {
  propertyId: number;
  propertyName: string;
  isPurchasable: boolean;
  imageUrl: string | undefined;
  toPropertyDetail: (propertyId: number) => void;
};

const PropertyCard = ({
  propertyId,
  propertyName,
  isPurchasable,
  imageUrl,
  toPropertyDetail,
}: Props) => {
  return (
    <Card
      maxW="sm"
      variant="outline"
      mt="3"
      mx="2"
      onClick={() => {
        toPropertyDetail(propertyId);
      }}
    >
      <CardBody>
        <Image alt={imageUrl} src={imageUrl} borderRadius="lg" />
        <Flex mt="6">
          <Heading size="md">{propertyName}</Heading>
          <Spacer />
          {isPurchasable && <Text>買取可能</Text>}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default PropertyCard;
