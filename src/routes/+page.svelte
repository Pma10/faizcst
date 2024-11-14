<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    const targetDate = new Date('2025-11-15T00:00:00');

    const timeRemaining = writable({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0
    });

    const updateCountdown = () => {
        const now = new Date();
        const diff = targetDate - now;

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
    };

    onMount(() => {
        updateCountdown();
        const interval = setInterval(updateCountdown, 10);

        return () => clearInterval(interval); 
    });
</script>

<style>
    :global(html){
        background-color: #121212;
    }
    .background {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #121212;
        color: #ffffff;
        font-size: 2em;
        font-family: Arial, sans-serif;
    }

    .countdown {
        text-align: center;
    }
</style>

<div class="background">
    <div class="countdown">
        <h1>For Faiz's CST</h1>

        {$timeRemaining.days}d
        {$timeRemaining.hours}h
        {$timeRemaining.minutes}m
        {$timeRemaining.seconds}s
        {$timeRemaining.milliseconds}ms
    </div>
</div>
