<script setup lang="ts">
definePageMeta({
  title: "Sign up",
  description: "Sign up to get started",
  layout: "sign",
});

import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
import GradientButton from "~/components/GradientButton.vue";
import { reactive, ref } from "vue";

const schema = object({
  email: string().email("Invalid email").required("Required"),
  password: string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  email: undefined,
  password: "",
});

const showPassword = ref(false);

function togglePasswordVisibility() {
  showPassword.value = !showPassword.value;
}

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email)
    errors.push({ path: "email", message: "Required" }); // Required
  else if (!emailRegex.test(state.email))
    errors.push({ path: "email", message: "Invalid email address" }); // Email is invalid
  if (!state.password) errors.push({ path: "password", message: "Required" }); // Required
  return errors;
};

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data);
}
</script>

<template>
  <div class="relative flex-1 flex flex-col items-center justify-center">
    <!-- Link to home -->
    <NuxtLink to="/" class="absolute top-4 right-4">
      <UButton
        icon="i-heroicons-x-mark-20-solid"
        color="gray"
        variant="ghost"
      />
    </NuxtLink>

    <!-- Form content -->
    <h1 class="text-3xl text-right">Welcome Back</h1>
    <UForm
      :state="state"
      class="flex flex-col items-center justify-center space-y-6 w-[300px] my-4"
      @submit="onSubmit"
    >
      <UFormGroup label="Email" name="email" class="w-full">
        <UInput v-model="state.email" type="email" size="lg" />
      </UFormGroup>

      <UFormGroup label="Password" name="password" class="w-full">
        <UInput
          v-model="state.password"
          name="password"
          autocomplete="off"
          size="lg"
          :type="showPassword ? 'text' : 'password'"
          :ui="{ icon: { trailing: { pointer: '' } } }"
        >
          <template #trailing>
            <UButton
              v-show="state.password !== ''"
              :icon="
                showPassword
                  ? 'i-heroicons-eye-slash-20-solid'
                  : 'i-heroicons-eye-20-solid'
              "
              color="gray"
              variant="link"
              :padded="false"
              @click="togglePasswordVisibility"
            />
          </template>
        </UInput>
        <!-- Forgot Password? -->
        <NuxtLink
          to="/user/forgot-password"
          class="text-xs underline hover:no-underline"
        >
          Forgot password or can't sign in?
        </NuxtLink>
      </UFormGroup>

      <!-- Signup button -->
      <GradientButton
        button-text="Sign In"
        :validate="validate"
        :state="state"
      />
    </UForm>

    <!-- Don't have an account? Link to Signup page -->
    <span class="text-sm text-gray-50">
      Don't have an account?
      <NuxtLink
        to="/user/signup"
        class="font-semibold underline hover:no-underline"
      >
        Sign up
      </NuxtLink>
    </span>
  </div>
</template>

<script lang="ts">
export default {
  name: "SignupPage",
};
</script>
