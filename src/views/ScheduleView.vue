<template>
  <div class="flex flex-col m-[50px] sm:m-[100px] gap-16">
    <card v-for="(events, day) in schedule()" class="border border-nw-border bg-[#160D2F]/20">
      <card-header>
        <card-title class="text-white">{{ String(day[0]).toUpperCase() + day.substring(1) }}</card-title>
      </card-header>

      <card-content>
        <custom-table>
          <table-header>
            <table-head class="w-[80px]">Time</table-head>
            <table-head>Event</table-head>
            <table-head class="w-[107px]">Place</table-head>
          </table-header>

          <table-body>
            <table-row v-for="event in events" class="text-white border-b-nw-border hover:bg-transparent">
              <table-cell class="font-mono">{{ event.time }}</table-cell>
              <table-cell class="text-left">{{ event.event }}</table-cell>
              <table-cell>{{ event.place }}</table-cell>
            </table-row>
          </table-body>
        </custom-table>
      </card-content>
    </card>

    <span class="text-center opacity-60">N.B.: Schedule is temporary and subject to change</span>
  </div>
</template>

<script lang="ts">
import {mapState} from "pinia";
import {useScheduleStore} from "@/store/schedule.ts";
import {Table as CustomTable, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default {
  name: 'ScheduleView',
  components: {
    TableCell,
    TableRow,
    TableBody,
    TableHead,
    TableHeader,
    CardContent,
    CardTitle,
    CardHeader,
    Card,
    CustomTable
  },
  methods: {
    ...mapState(useScheduleStore, ['schedule'])
  }
}
</script>
