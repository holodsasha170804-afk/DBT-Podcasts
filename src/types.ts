interface NavigationItem {
    label: string;
    href: string;
    iconBefore?: string;
    iconAfter?: string;
    extraClasses?: string;
}

// ========================================
// PODCASTS.JSON
// ========================================

interface Publisher {
    id: string;
    name: string;
    website?: string;
    email?: string;
}

interface Rating {
    average: number;
    count: number;
    distribution: {
        5: number;
        4: number;
        3: number;
        2: number;
        1: number;
    };
}

interface Comment {
    id: string;
    authorName: string;
    rating: number;
    text: string;
    createdAt: string;
}

interface Socials {
    twitter?: string;
    github?: string;
    website?: string;
}

interface Author {
    id: string;
    name: string;
    language: string[];
    avatar?: string;
    bio: string;
    socials: Socials;
    createdAt: string;
}

interface Episode {
    id: string;
    title: string;
    description: string;
    episodeNumber: number;
    season: number;
    interviewerIds: string[];
    guestIds: string[];
    publishedAt: string;
    duration: number;
    language: string;
    posterUrl: string;
    category: string;
    subcategory: string;
    audioUrl: string;
    videoUrl?: string;
    ratings: Rating;
    comments: Comment[];
    tags: string[];
}

interface Podcast {
    id: string;
    title: string;
    description: string;
    publisher: Publisher;
    authorIds: string[];
    publishedAt: string;
    language: string;
    posterUrl: string;
    category: string;
    subcategory: string;
    ratings: Rating;
    comments: Comment[];
    episodes: Episode[];
}


// ========================================
// EXPORTS
// ========================================

export type {
    NavigationItem,
    Podcast,
    Episode,
    Author,
    Publisher,
    Rating,
    Comment,
    Socials
};
