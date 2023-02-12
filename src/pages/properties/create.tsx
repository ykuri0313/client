import { useForm } from "react-hook-form";
import { PropertyCreateForm } from "@/type/form/propertyCreateForm";
import {
  Flex,
  Input,
  Button,
  Textarea,
  Text,
  FormControl,
  Checkbox,
  Progress,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import usePropertiesCreatePage from "../../hooks/pages/usePropertiesCreatePage";

const PropertyCreateForm = () => {
  const { onValid, onInValid, isLoading } = usePropertiesCreatePage();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<PropertyCreateForm>();

  return (
    <>
      <Progress value={10} hasStripe colorScheme="teal" />
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <Flex justifyContent="center" mt="35">
          <Input
            {...register("name", { required: "name is required" })}
            w="20%"
            size="lg"
            variant="flushed"
            placeholder="持ち物の名前"
            focusBorderColor="whiteAlpha"
          />
        </Flex>
        <Flex justifyContent="center" mt="1">
          <Text color="red">{errors.name && "持ち物の名前は必須です"}</Text>
        </Flex>
        <Flex justifyContent="center">
          <Textarea
            {...register("description", {
              required: "description is required",
            })}
            w="40%"
            h="80"
            mt="5"
            variant="filled"
            placeholder="持ち物の説明を記述してください"
            focusBorderColor="whiteAlpha"
          />
        </Flex>
        <Flex justifyContent="center" mt="1">
          <Text color="red">
            {errors.description && "持ち物の説明は必須です"}
          </Text>
        </Flex>
        <Flex justifyContent="center" alignItems="center" mt="3">
          <Text mr="5">レンタル期間</Text>
          <NumberInput variant="filled">
            <NumberInputField
              {...register("rentalPeriod", {
                required: "rentalPeriod is required",
              })}
            />
          </NumberInput>
        </Flex>
        <Flex justifyContent="center" mt="1">
          <Text color="red">
            {errors.rentalPeriod && "レンタル期間は必須です"}
          </Text>
        </Flex>
        <Flex justifyContent="center" alignItems="center" mt="3">
          <Text mr="5">設定価格</Text>
          <NumberInput variant="filled">
            <NumberInputField
              {...register("price", {
                required: "price is required",
              })}
            />
          </NumberInput>
        </Flex>
        <Flex justifyContent="center" mt="1">
          <Text color="red">{errors.price && "価格は必須です"}</Text>
        </Flex>
        <FormControl
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt="8"
        >
          <Checkbox colorScheme="teal" {...register("isPurchasable")}>
            購入可能にする
          </Checkbox>
        </FormControl>
        <Flex justifyContent="center" mt="10">
          <Button type="submit" colorScheme="teal" px="10">
            画像登録へ
          </Button>
        </Flex>
      </form>
    </>
  );
};

export default PropertyCreateForm;
