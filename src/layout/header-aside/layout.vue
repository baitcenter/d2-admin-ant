<style lang="scss">
@import './style';
</style>

<template>
  <a-layout id="d2-layout-header-aside">
    <a-layout-sider
      breakpoint="lg"
      collapsedWidth="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint">
      <img class="logo" src="logo.png">
      <a-menu
        theme="dark"
        mode="inline"
        :defaultSelectedKeys="['4']">
        <a-menu-item key="1">
          <a-icon type="user"/>
          <span class="nav-text">nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera"/>
          <span class="nav-text">nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload"/>
          <span class="nav-text">nav 3</span>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="user"/>
          <span class="nav-text">nav 4</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }">
        <a-menu
          mode="horizontal"
          :defaultSelectedKeys="['2']"
          :style="{ lineHeight: '64px' }">
          <a-menu-item key="1">nav 1</a-menu-item>
          <a-menu-item key="2">nav 2</a-menu-item>
          <a-sub-menu>
            <span slot="title" class="submenu-title-wrapper">
              <a-icon type="setting"/>nav 3
            </span>
            <a-menu-item key="3">nav 3</a-menu-item>
            <a-menu-item key="4">nav 4</a-menu-item>
            <a-menu-item key="5">nav 5</a-menu-item>
            <a-menu-item key="6">nav 6</a-menu-item>
            <a-menu-item key="7">nav 7</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <a-tabs type="card" id="d2-layout-header-aside--tabs">
          <a-tab-pane tab="Tab 1" key="1"></a-tab-pane>
          <a-tab-pane tab="Tab 2" key="2"></a-tab-pane>
          <a-tab-pane tab="Tab 3" key="3"></a-tab-pane>
          <a-tab-pane tab="Tab 4" key="4"></a-tab-pane>
          <a-tab-pane tab="Tab 5" key="5"></a-tab-pane>
          <a-tab-pane tab="Tab 6" key="6"></a-tab-pane>
        </a-tabs>
        <div id="d2-layout-header-aside--view">
          <router-view/>
        </div>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  methods: {
    onCollapse (collapsed, type) {
      console.log(collapsed, type)
    },
    onBreakpoint (broken) {
      console.log(broken)
    }
  }
}
</script>
