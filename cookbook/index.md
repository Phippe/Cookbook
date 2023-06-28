# Rezepte

<ul>
    <li v-for="recipe in recipes">
        <a :href="recipe.path">{{ recipe.name }}</a>
    </li>
</ul>

<script setup>
import recipes from "./recipes.json";
</script>
