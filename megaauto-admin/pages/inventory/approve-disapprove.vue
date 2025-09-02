<template>
    <div :class="['rounded', isFor ? 'bg-green-200' : 'bg-red-200', 'border', 'shadow-sm', 'py-3 px-5']">
        <h2 class="font-bold">{{ isFor ? "Approve Inventory" : "Disapprove Vehicles" }}</h2>
        <div class="grid sm:grid-cols-3 gap-5 py-3">
            <!-- select source -->
            <select v-model="source" class="border border-gray-300 rounded py-2 px-4 focus:ring-primary focus:border-primary">
                <option value="" selected>Select Source</option>
                <option v-for="source of sourcesList" :key="source.id" :value="source.id">{{source.name}}</option>
            </select>

            <!-- date picker -->
            <input type="date" v-model="date" class="border border-gray-300 rounded py-2 px-4 focus:ring-primary focus:border-primary" />

            <!-- submit button -->
            <button 
                :disabled="!source || !date" 
                @click="submit" 
                class="bg-primary text-white rounded py-2 px-4 hover:bg-black transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed">
                Submit
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "approve-disapprove",
    props: {
        isFor: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            approveStatus: this.isFor ? 1 : 0,
            source: "",
            date: "",
            sourcesList: [
                { id: 1, name: "PG" },
                { id: 2, name: "CPT" },
                { id: 3, name: "EG" },
                { id: 4, name: "ST" }
            ]
        };
    },
    methods: {
        submit() {
            if (!this.source || !this.date) {
                alert('Please select a source and a date');
                return;
            }
            console.log("Submitted with:", { source: this.source, date: this.date, status: this.approveStatus });
        }
    }
}
</script>
