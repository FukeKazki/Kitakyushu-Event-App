<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>北九州イベント情報</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
              class="mt-5"
              v-model="event_name"
              label="イベント名"
              @change="onChange"
      ></v-text-field>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content style="margin: 0 auto; width: 1000px;">
      <v-card v-for="(event, idx) in fillterd_events" :key="idx" class="pa-3">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>{{event.event_name}}</v-list-item-title>
            <div class="text-left">
              <v-chip small>{{event.ctg1}}</v-chip>
              <v-chip small class="ma-2">{{event.Area}}</v-chip>
            </div>
            <v-list-item-subtitle>{{event.description}}</v-list-item-subtitle>
            <div class="caption">{{event.place}}</div>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-content>
    <v-footer>
      <v-col
              class="text-center"
              cols="12"
      >
        <strong>cc Fuke Kazki</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',

  data: () => ({
    events: [],
    event_name: '',
  }),

  created() {
    axios
            .get('https://www.city.kitakyushu.lg.jp/cgi-bin/event/api.cgi')
            .then(res => this.events = res.data.events)
            // eslint-disable-next-line no-console
            .catch(err => console.log(err))
  },

  computed: {
    fillterd_events: function() {
      return this.events.filter(event => event.event_name.indexOf(this.event_name) !== -1)
    }
  }
};
</script>
