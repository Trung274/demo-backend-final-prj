import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    Button,
    Spinner,
    Box,
    Text,
    Container,
    Flex,
    Heading,
    Image,
    Stack,
    HStack,
    Link
} from '@chakra-ui/react';
import { PasswordInput } from '@/components/PasswordInput';
import { useStore } from '../../store';

interface LoginProps {
    isOpen: boolean; // Flag to control modal visibility
    onClose: () => void; // Function to handle model closing
}

const schema = yup.object({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().required('Password is required'),
});

const LoginDialog: React.FC<LoginProps> = ({ isOpen, onClose }) => {
    const { authStore } = useStore();
    const [isLoading, setLoading] = useState<boolean | undefined>(false);
    const [loginError, setLoginError] = useState<String>("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data: any) => {
        try {
            setLoading(true);
            authStore.login(data.email, data.password)
            .then((x:any) => {
                debugger
                toast.success('Logged in successfully!');
                onClose();
            })
            .catch((e: any) => {
                debugger
                toast.error(e.message || 'An error occurred during login');
                setLoginError(e.message);
            });
        } catch (e: any) {
            setLoginError(e.message);
            toast.error(e.message || 'An error occurred during login');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xl'}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    Login
                    <ModalCloseButton />
                </ModalHeader>
                <ModalBody pb={6}>
                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                        {loginError ? (
                            <Text fontSize="14px" color="primary.500">
                                {loginError}
                            </Text>
                        ) : null}
                        <Stack spacing="20px">
                            <FormControl isInvalid={!!errors?.email}>
                                <FormLabel className='!font-normal'>Email</FormLabel>
                                <Input
                                    autoComplete='off'
                                    variant={errors.email ? "error" : "outline"}
                                    placeholder="Enter Your Email"
                                    {...register("email")}
                                    className='input-css'
                                />
                                {errors.email && (
                                    <FormErrorMessage color="primary.500" className='text-red-400'>{errors?.email?.message}</FormErrorMessage>
                                )}
                            </FormControl>
                            <FormControl isInvalid={!!errors.password}>
                                <FormLabel className='!font-normal'>Password</FormLabel>
                                <PasswordInput autoComplete="new-password" className='input-css border' isError={!!errors.password} placeholder="Enter Your Password" {...register("password")} />
                                {errors.password && (
                                    <FormErrorMessage color="primary.500" className='text-red-400'>{errors?.password?.message}</FormErrorMessage>
                                )}
                            </FormControl>
                            <Stack spacing={".5rem"}>
                                <Link
                                    color="primary.500"
                                    href="/forgot-password"
                                    ml="auto"
                                    textAlign="right"
                                    fontSize={{ base: "12px", md: "14px" }}>
                                    Forgot your password?
                                </Link>
                            </Stack>
                            <Button type="submit" className="button-default mb-6" isLoading={isLoading}>
                                Login
                            </Button>
                        </Stack>
                    </form>
                    <p className="text-center flex flex-wrap items-center justify-center gap-3">
                        <span className="text-sm text-deep font-normal">Not a Member?</span>
                        <button className="inline-block text-sm font-normal text-themePrimary hover:text-green-600 hover:underline">Create Account</button>
                    </p>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default LoginDialog;