<script setup lang="ts">
definePageMeta({
  title: "Sign up",
  description: "Sign up to get started",
  layout: "sign",
});

import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
import GradientButton from "~/components/GradientButton.vue";
import { reactive, computed, ref } from "vue";

const schema = object({
  email: string().email("Invalid email").required("Required"),
  password: string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
  referralCode: string().optional(),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  email: undefined,
  password: "",
  referralCode: undefined,
});

const showPassword = ref(false);

function togglePasswordVisibility() {
  console.log("Toggling password visibility");
  showPassword.value = !showPassword.value;
}

function updatePasswordStrength() {
  // Logic to calculate password strength
  let strength = 0;
  const length = state.password?.length;

  if (length > 8) {
    strength += 20;
    if (/[A-Z]/.test(state.password)) strength += 20; // at least one uppercase
    if (/[0-9]/.test(state.password)) strength += 20; // at least one number
    if (/[^A-Za-z0-9]/.test(state.password)) strength += 20; // at least one special character
  }

  return strength;
}

const passwordStrength = computed(() => {
  const percent = updatePasswordStrength();
  let color = "red";
  if (percent > 20) color = "orange";
  if (percent > 40) color = "yellow";
  if (percent > 60) color = "green";

  return { percent, color };
});

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email)
    errors.push({ path: "email", message: "Required" }); // Required
  else if (!emailRegex.test(state.email))
    errors.push({ path: "email", message: "Invalid email address" }); // Invalid email
  if (!state.password)
    errors.push({ path: "password", message: "Required" }); // Required
  else if (state.password?.length < 8)
    errors.push({ path: "password", message: "Must be at least 8 characters" }); // Min length
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
    <h1 class="text-3xl text-right">Create account</h1>
    <UForm
      :validate="validate"
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
          @input="updatePasswordStrength"
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
        <UProgress
          v-show="state.password !== ''"
          class="rounded-full mt-2"
          size="md"
          :color="passwordStrength.color"
          :indicator="false"
          :value="passwordStrength.percent"
          :max="80"
        />
      </UFormGroup>

      <UFormGroup
        label="Referral (Optional)"
        name="referralCode"
        class="w-full"
      >
        <UInput v-model="state.referralCode" size="lg" />
      </UFormGroup>

      <!-- Signup button -->
      <GradientButton
        button-text="Sign Up"
        :validate="validate"
        :state="state"
      />
    </UForm>

    <!-- Already have an account, link to signin page -->
    <span class="text-sm text-gray-50">
      Already have an account?
      <NuxtLink
        to="/user/signin"
        class="font-semibold underline hover:no-underline"
      >
        Sign in
      </NuxtLink>
    </span>
  </div>
</template>

<script lang="ts">
export default {
  name: "SignupPage",
};
</script>
