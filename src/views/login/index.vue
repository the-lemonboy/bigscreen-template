<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-900">
    <div class="w-full max-w-md rounded-lg bg-gray-800/80 p-6 shadow-xl">
      <h1 class="mb-4 text-center text-2xl font-semibold text-white">登录</h1>
      <form class="space-y-4">
        <div>
          <label class="mb-1 block text-sm text-gray-300">用户名</label>
          <input
            type="text"
            class="w-full rounded border border-gray-700 bg-gray-900/80 px-3 py-2 text-white outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label class="mb-1 block text-sm text-gray-300">密码</label>
          <input
            type="password"
            class="w-full rounded border border-gray-700 bg-gray-900/80 px-3 py-2 text-white outline-none focus:border-blue-500"
          />
        </div>
        <button type="button" class="w-full rounded bg-blue-600 py-2 font-medium text-white hover:bg-blue-500"
          >登录</button
        >
      </form>
    </div>
  </div>
</template>
<script setup></script>
<style scoped></style>
