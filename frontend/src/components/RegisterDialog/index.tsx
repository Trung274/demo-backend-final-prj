import React, { useEffect, useState } from 'react';
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
    Stack,
    Text,
} from '@chakra-ui/react';
import { PasswordInput } from '@/components/PasswordInput';
import { useStore } from '../../store';

interface RegisterProps {
    isOpen: boolean;
    onClose: () => void;
}

const schema = yup.object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().required('Password is required'),
    role: yup.string().oneOf(['candidate', 'employer'], 'Invalid role').required('Role is required'),
});

const RegisterDialog: React.FC<RegisterProps> = ({ isOpen, onClose }) => {
    const { authStore } = useStore();
    const [isLoading, setLoading] = useState(false);
    const [registerError, setRegisterError] = useState<string>("");
    const [role, setRole] = useState<string>("candidate");
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
            const roleId = role === 'candidate' ? '667912d3f4be8728ccf4de3e' : '6690f83949b634c6f84831d1';
            authStore.register(data.firstName, data.lastName, data.email, data.password, roleId)
                .then((x: any) => {
                    toast.success('Registered successfully! Please log in.');
                    onClose();
                })
                .catch((e: any) => {
                    toast.error(e.message || 'An error occurred during registration');
                    setRegisterError(e.message);
                });
        } catch (e: any) {
            setRegisterError(e.message);
            toast.error(e.message || 'An error occurred during registration');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xl'}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    Create an Account
                    <ModalCloseButton />
                </ModalHeader>
                <ModalBody pb={6}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {registerError && (
                            <Text fontSize="14px" color="primary.500">
                                {registerError}
                            </Text>
                        )}
                        <Stack spacing="20px">
                            <div className="flex gap-6 pt-2 pb-8 w-full">
                                <div className="w-6/12">
                                    <Button
                                        {...register("role")}
                                        value="candidate"
                                        className={`w-full ${role === 'employer' ? "button-greenLight" : "button-green"}`}
                                        onClick={() => {
                                            setRole('candidate')
                                        }}
                                    >
                                        Candidate
                                    </Button>
                                </div>
                                <div className="w-6/12">
                                    <Button
                                        {...register("role")}
                                        value="employer"
                                        className={`w-full ${role === 'candidate' ? "button-greenLight" : "button-green"}`}
                                        onClick={() => {
                                            setRole('employer')
                                        }}
                                    >
                                        Employer
                                    </Button>
                                </div>
                            </div>
                            <FormControl isInvalid={!!errors.firstName}>
                                <FormLabel className='!font-normal'>First Name</FormLabel>
                                <Input
                                    variant={errors.firstName ? "error" : "outline"}
                                    placeholder="Enter Your First Name"
                                    {...register("firstName")}
                                    className='input-css'
                                />
                                {errors.firstName && (
                                    <FormErrorMessage color="primary.500" className='text-red-400'>{errors.firstName.message}</FormErrorMessage>
                                )}
                            </FormControl>
                            <FormControl isInvalid={!!errors.lastName}>
                                <FormLabel className='!font-normal'>Last Name</FormLabel>
                                <Input
                                    variant={errors.lastName ? "error" : "outline"}
                                    placeholder="Enter Your Last Name"
                                    {...register("lastName")}
                                    className='input-css'
                                />
                                {errors.lastName && (
                                    <FormErrorMessage color="primary.500" className='text-red-400'>{errors.lastName.message}</FormErrorMessage>
                                )}
                            </FormControl>
                            <FormControl isInvalid={!!errors.email}>
                                <FormLabel className='!font-normal'>Email</FormLabel>
                                <Input
                                    variant={errors.email ? "error" : "outline"}
                                    placeholder="Enter Your Email"
                                    {...register("email")}
                                    className='input-css'
                                />
                                {errors.email && (
                                    <FormErrorMessage color="primary.500" className='text-red-400'>{errors.email.message}</FormErrorMessage>
                                )}
                            </FormControl>
                            <FormControl isInvalid={!!errors.password}>
                                <FormLabel className='!font-normal'>Password</FormLabel>
                                <PasswordInput autoComplete="new-password" className='input-css border' isError={!!errors.password} placeholder="Enter Your Password" {...register("password")} />
                                {errors.password && (
                                    <FormErrorMessage color="primary.500" className='text-red-400'>{errors.password.message}</FormErrorMessage>
                                )}
                            </FormControl>
                            <Button type="submit" className="button-default mb-6" isLoading={isLoading}>
                                Register
                            </Button>
                        </Stack>
                    </form>
                    <p className="text-center flex flex-wrap items-center justify-center gap-3">
                        <span className="text-sm text-deep font-normal">Already have an Account?</span>
                        <button className="inline-block text-sm font-normal text-themePrimary hover:text-green-600 hover:underline" onClick={onClose}>Login</button>
                    </p>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default RegisterDialog;