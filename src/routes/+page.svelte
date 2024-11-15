<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    const csts = {
        2007 : new Date('2025-11-13T09:00:00'),
        2008 : new Date('2026-11-13T09:00:00'),
        2009 : new Date('2027-11-18T09:00:00')
    }

    const people = {
        2007 : 'Faiz',
        2008 : 'Faiz2',
        2009 : 'GUNU'
    }
    let nowPeople = people[2007]

    const targetDate = writable(new Date('2025-11-13T09:00:00'));
    let loading = true;

    const timeRemaining = writable({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0
    });

    const updateTargetDate = (year) => {
        loading = true;
        targetDate.set(csts[year]);
        nowPeople = people[year]
        loading = false;
    };

    const updateCountdown = () => {
        const now = new Date();
        targetDate.subscribe((date) => {
            console.log(date);
            const diff = date - now;

            if (diff > 0) {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);
                const milliseconds = diff % 1000;

                timeRemaining.set({ days, hours, minutes, seconds, milliseconds });
            } else {
                timeRemaining.set({ days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
            }
        })();
    };

    onMount(() => {
        loading = false;
        const interval = setInterval(updateCountdown, 1);

        return () => clearInterval(interval);
    });
</script>

<style>
    :global(html) {
        background-color: #121212;
    }
    .background {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
        background-color: #121212;
        color: #ffffff;
        font-size: 2em;
        font-family: Arial, sans-serif;
    }
    .countdown {
        text-align: center;
    }
    .loading {
        font-size: 2em;
        font-weight: 900;
    }
    .sel-menu {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style-type: none;
        padding: 0;
        color: #ffffff;
    }
    .sel-menu li {
        margin-right: 10px;
        cursor: pointer;
        background-color: #121212;
        transition: all 0.3s;
        font-weight: 600;
    }
    .sel-menu li:hover {
        transform: scale(1.2);
    }
</style>

<div>
    <ul class="sel-menu">
        <li on:click={() => updateTargetDate("2007")}>2007</li>
        <li on:click={() => updateTargetDate("2008")}>2008</li>
        <li on:click={() => updateTargetDate("2009")}>2009</li>
    </ul>
</div>
<div class="background">
    {#if loading}
        <p class="loading">Loading...</p>
    {/if}
    {#if !loading}
        <div class="countdown">
            <h1>For {nowPeople}'s CST</h1>
            {$timeRemaining.days}d
            {$timeRemaining.hours}h
            {$timeRemaining.minutes}m
            {$timeRemaining.seconds}s
            {$timeRemaining.milliseconds}ms
        </div>
    {/if}
</div>
