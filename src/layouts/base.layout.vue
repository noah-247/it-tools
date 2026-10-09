<script lang="ts" setup>
import { NIcon, useThemeVars } from 'naive-ui';

import { RouterLink } from 'vue-router';
import { Heart, Home2, Menu2 } from '@vicons/tabler';

import { storeToRefs } from 'pinia';
import MenuLayout from '../components/MenuLayout.vue';
import NavbarButtons from '../components/NavbarButtons.vue';
import { useStyleStore } from '@/stores/style.store';
import { config } from '@/config';
import type { ToolCategory } from '@/tools/tools.types';
import { useToolStore } from '@/tools/tools.store';
import { useTracker } from '@/modules/tracker/tracker.services';
import CollapsibleToolMenu from '@/components/CollapsibleToolMenu.vue';

const themeVars = useThemeVars();
const styleStore = useStyleStore();
const version = config.app.version;
const commitSha = config.app.lastCommitSha.slice(0, 7);

const { tracker } = useTracker();
const { t } = useI18n();

const toolStore = useToolStore();
const { favoriteTools, toolsByCategory } = storeToRefs(toolStore);

const tools = computed<ToolCategory[]>(() => [
  ...(favoriteTools.value.length > 0 ? [{ name: t('tools.categories.favorite-tools'), components: favoriteTools.value }] : []),
  ...toolsByCategory.value,
]);
</script>

<template>
  <MenuLayout class="menu-layout" :class="{ isSmallScreen: styleStore.isSmallScreen }">
    <template #sider>
      <RouterLink to="/" class="hero-wrapper">
        <div class="text-wrapper">
          <div class="title">
            IT-TOOLS<span class="status-dot" aria-hidden="true" />
          </div>
          <div class="subtitle voidez-eyebrow">
            {{ $t('home.subtitle') }}
          </div>
        </div>
      </RouterLink>

      <div class="sider-content">
        <div v-if="styleStore.isSmallScreen" flex flex-col items-center>
          <locale-selector w="90%" />

          <div flex justify-center>
            <NavbarButtons />
          </div>
        </div>

        <CollapsibleToolMenu :tools-by-category="tools" />
      </div>
    </template>

    <template #content>
      <header class="voidez-header" flex items-center justify-center>
        <c-button
          circle
          variant="text"
          :aria-label="$t('home.toggleMenu')"
          @click="styleStore.isMenuCollapsed = !styleStore.isMenuCollapsed"
        >
          <NIcon size="25" :component="Menu2" />
        </c-button>

        <c-tooltip :tooltip="$t('home.home')" position="bottom">
          <c-button to="/" circle variant="text" :aria-label="$t('home.home')">
            <NIcon size="25" :component="Home2" />
          </c-button>
        </c-tooltip>

        <c-tooltip :tooltip="$t('home.uiLib')" position="bottom">
          <c-button v-if="config.app.env === 'development'" to="/c-lib" circle variant="text" :aria-label="$t('home.uiLib')">
            <icon-mdi:brush-variant text-20px />
          </c-button>
        </c-tooltip>

        <command-palette />

        <locale-selector v-if="!styleStore.isSmallScreen" />

        <div>
          <NavbarButtons v-if="!styleStore.isSmallScreen" />
        </div>

        <c-tooltip position="bottom" :tooltip="$t('home.support')">
          <c-button
            href="https://www.buymeacoffee.com/cthmsst"
            rel="noopener"
            target="_blank"
            class="support-button"
            :bordered="false"
            @click="() => tracker.trackEvent({ eventName: 'Support button clicked' })"
          >
            {{ $t('home.buyMeACoffee') }}
            <NIcon v-if="!styleStore.isSmallScreen" :component="Heart" ml-2 />
          </c-button>
        </c-tooltip>
      </header>
      <slot />
    </template>

    <template #footer>
      <footer class="footer voidez-footer">
        <div class="voidez-eyebrow">
          Legal
        </div>
        <div>{{ $t('footer.unofficialDeployment') }}</div>
        <div class="footer-row">
          <i18n-t keypath="footer.originalCopyright" tag="span" scope="global">
            <template #year>
              {{ new Date().getFullYear() }}
            </template>
            <template #author>
              <c-link target="_blank" rel="noopener" href="https://corentin.tech?utm_source=it-tools&utm_medium=footer">
                Corentin Thomasset
              </c-link>
            </template>
          </i18n-t>
          <span>{{ $t('footer.modifiedCopyright') }}</span>
        </div>
        <div class="footer-row">
          <span>{{ $t('footer.noWarranty') }}</span>
          <c-link target="_blank" rel="noopener" href="https://www.gnu.org/licenses/gpl-3.0.html">
            {{ $t('footer.license') }}
          </c-link>
          <c-link target="_blank" rel="noopener" href="https://github.com/noah-247/it-tools/tree/a-deploy-4">
            {{ $t('footer.sourceCode') }}
          </c-link>
        </div>
        <div class="footer-row footer-meta">
          <span>
            IT-Tools
            <c-link target="_blank" rel="noopener" :href="`https://github.com/CorentinTh/it-tools/tree/v${version}`">
              v{{ version }}
            </c-link>
            -
            <c-link
              target="_blank"
              rel="noopener"
              type="primary"
              :href="`https://github.com/noah-247/it-tools/tree/${config.app.lastCommitSha}`"
            >
              {{ commitSha }}
            </c-link>
          </span>
          <c-link target="_blank" rel="noopener" href="https://voidez.com">
            voidez.com ↗
          </c-link>
        </div>
      </footer>
    </template>
  </MenuLayout>
</template>

<style lang="less" scoped>
.footer {
  flex: none;
  text-align: center;
  color: v-bind('themeVars.textColor2');
  border-top: 1px solid v-bind('themeVars.borderColor');
  padding: 24px clamp(16px, 3vw, 48px);
  font-size: 12px;
  line-height: 1.75;
  text-transform: none;
  overflow-wrap: anywhere;

  > .voidez-eyebrow {
    margin-bottom: 12px;
  }
}

.footer-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px 16px;
}

.footer-meta {
  margin-top: 12px;
}

.sider-content {
  padding: 176px 12px 48px;
}

.hero-wrapper {
  position: absolute;
  display: block;
  left: 0;
  width: 100%;
  z-index: 10;
  overflow: hidden;
  min-height: 152px;
  padding: 36px 24px 24px;
  background: #0b0e1a;
  text-decoration: none;
  border-bottom: 1px solid #252338;

  .text-wrapper {
    width: 100%;
    color: #f5f7ff;

    .title {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 0.18em;
    }

    .status-dot {
      flex: none;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #a78bfa;
    }

    .subtitle {
      margin-top: 16px;
      color: rgba(245, 247, 255, 0.68);
      letter-spacing: 0.12em;
    }
  }
}
</style>
