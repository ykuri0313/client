import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import HttpClient from "@/infrastructure/HttpClient";
import { useRouter } from "next/router";
import usePropertyImageAttachPage from "@/hooks/pages/usePropertyImageAttachPage";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  Progress,
  Heading,
  Image,
  Input,
} from "@chakra-ui/react";

const PropertyImageAttachForm = () => {
  const router = useRouter();

  const { file, onSkipAttachImage, onChangeFile, onClickSubmit } =
    usePropertyImageAttachPage();

  return (
    <>
      <Progress value={50} hasStripe colorScheme="teal" />
      <Flex justifyContent="center" mt="10">
        <Box w="200px" h="200px" border="dotted" position="relative">
          <Flex justifyContent="center" mt="80px">
            <Heading fontSize="mb" color="gray.700" fontWeight="bold">
              {file ? "画像を再度選択する" : "画像を選択する"}
            </Heading>
          </Flex>
          <Input
            type="file"
            multiple={true}
            w="100%"
            h="100%"
            position="absolute"
            top="0"
            left="0"
            opacity="0"
            onChange={onChangeFile}
          />
        </Box>
      </Flex>
      <Flex justifyContent="center" mt="10">
        {file ? (
          <Image
            src={URL.createObjectURL(file)}
            alt="image"
            w="400px"
            objectFit="cover"
          />
        ) : (
          <Box w="400px" h="200px" border="dotted"></Box>
        )}
      </Flex>
      <Flex justifyContent="center" mt="10">
        <Button
          onClick={() => onClickSubmit(router.query.propertyId)}
          colorScheme="teal"
          px="10"
          isDisabled={!file}
        >
          画像を登録する
        </Button>
      </Flex>
      <Flex justifyContent="right" mr="20">
        <Button colorScheme="gray" px="10" onClick={() => onSkipAttachImage()}>
          画像登録をスキップ
        </Button>
      </Flex>
      <Flex justifyContent="right" mt="3">
        <Alert status="warning" w="25%" mr="3">
          <AlertIcon />
          スキップした場合、現在登録中の持ち物はクローゼットに下書き保存され公開されません。
        </Alert>
      </Flex>
    </>
  );
};

export default PropertyImageAttachForm;
