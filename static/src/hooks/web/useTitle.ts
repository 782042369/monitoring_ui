/*
 * @Author: 杨宏旋
 * @Date: 2021-05-13 10:05:41
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-05-13 15:03:16
 * @Description:
 */
import { watch, unref } from 'vue'
import { useTitle as usePageTitle } from '@vueuse/core'
import { useGlobSetting } from '@/hooks/setting'
import { useRouter } from 'vue-router'

import { REDIRECT_NAME } from '@/router/constant'

export function useTitle() {
  const { title } = useGlobSetting()
  const { currentRoute } = useRouter()

  const pageTitle = usePageTitle()

  watch(
    () => currentRoute.value.path,
    () => {
      const route = unref(currentRoute)
      if (route.name === REDIRECT_NAME) {
        return
      }

      const tTitle = route?.meta?.title as string
      pageTitle.value = tTitle ? ` ${tTitle} - ${title} ` : `${title}`
    },
    { immediate: true }
  )
}
