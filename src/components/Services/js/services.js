// set 1
import jiraSvg from '../../../images/services-icons/jira-svg.svg';
import wikiSvg from '../../../images/services-icons/wiki.svg';
import bitBucketSvg from '../../../images/services-icons/bitbucket.svg';
// set 2
import sonarSourceSvg from '../../../images/services-icons/sonar-source-svg.svg';
import vaultSvg from '../../../images/services-icons/vault-svg.svg';
import appStorePng from '../../../images/services-icons/appstore-services-wubg.png';
// set 3
import nexusPng from '../../../images/services-icons/nexus-icon.png';
import nexusIqSvg from '../../../images/services-icons/nexus-iq-svg.svg';
import bambooPng from '../../../images/services-icons/bamboo-icon.png';
// set 4
import pipelinePng from '../../../images/services-icons/pipeline-icon.png';
import argoWorkflowsPng from '../../../images/services-icons/argo-workflows.png';
import openShiftSvg from '../../../images/services-icons/openshift-service.svg';

import blackGuyWithBackPackAndLaptop from '../../../images/figures/3d-business-guy-with-backpack-and-laptop.png';
import whiteGuySittingWithAPhone from '../../../images/figures/business-3d-young-man-in-formalwear-sitting-on-the-floor-with-phone.png';
import asianGuyWorkingOnLaptop from '../../../images/figures/3d-business-guy-working-on-a-computer.png';
import blackGuyLyingOnStomechWithHisLaptop from '../../../images/figures/business-3d-man-lying-on-stomach-with-laptop.png';

const sharedStyles = {
    servicesStyles: {},
    imgDivStyles: { display: 'flex', placeSelf: 'center' },
    h1DivStyles: { display: 'flex', placeSelf: 'center' },
    pDivStyles: { display: 'flex' },
    imgStyles: { maxHeight: '150px', maxWidth: '150px', height: '100%', width: '100%' },
    h1Styles: { color: 'black', fontFamily: 'Saira, monospace', fontSize: '2.2vw' },
    pStyles: {
        color: 'black',
        textAlign: 'center',
        padding: '10px',
        paddingTop: '11px',
        fontFamily: 'Lexend, monosapce',
        fontSize: '0.8rem',
        lineHeight: '1.2rem',
    },
};

export const services = [
    [
        {
            src: jiraSvg,
            p: 'Deliver value to your users faster using proven agile tools to plan, track, and discuss work across your teams.',
            h1: 'DevOps Boards',
            imgDivStyles: {},
            h1DivStyles: { display: 'flex', placeSelf: 'center' },
            pDivStyles: { display: 'flex' },
            imgStyles: { minHeight: '100px', minWidth: '100px', height: '100%', width: '100%' },
            h1Styles: { color: 'black', fontFamily: 'Saira, monospace', fontSize: '2.2vw' },
            pStyles: {
                color: 'black',
                textAlign: 'center',
                fontFamily: 'Lexend, monosapce',
                padding: '10px',
                paddingTop: '11px',
                fontSize: '0.8rem',
                lineHeight: '1.2rem',
            },
        },
        {
            src: wikiSvg,
            p: 'Get Team/Project Workspace Where Knowledge and Collaboration Meet. serving as the starting point for finding critical information throughout your organization.',
            h1: 'DevOps Wiki',
            ...sharedStyles,
        },
        {
            src: bitBucketSvg,
            p: 'Get unlimited, cloud-hosted private Git repositories and collaborate to build better code with pull requests and advanced file management.',
            h1: 'DevOps Repos',
            ...sharedStyles,
        },
        {
            backgroundImage: `url(${blackGuyWithBackPackAndLaptop}), repeating-linear-gradient( 284deg,transparent 0px, transparent 1px, rgb(251, 251, 251) 1px, rgb(251, 251, 251) 3px), repeating-linear-gradient( 14deg, transparent 0px, transparent 1px, rgb(251, 251, 251) 1px,rgb(251, 251, 251) 3px), linear-gradient(90deg, rgb(222, 222, 222), rgb(222, 222, 222))`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '100% 0%',
        },
        {
            'res-services-iphone678-background-image': 'res-services-iphone678',
            'res-services-iphone-12-13-pro-max-background-image': 'res-services-iphone12-13-pro-max',
            'res-services-iphone-x-background-image': 'res-services-iphone-x',
            'res-services-iphone678-plus-background-image': 'res-services-iphone678-plus',
            'res-services-iphone12-13-background-image': 'res-services-iphone12-13',
            'res-services-ipad-pro-background-image': 'res-services-backpack-black-guy-ipad-pro',
        },
    ],
    [
        {
            src: sonarSourceSvg,
            p: 'SonarQube is universal tool for static code analysis that has become more or less the industry standard. Keeping code clean, simple, and easy to read is also a lot easier with SonarQube.',
            h1: 'DevOps Code Scan',
            ...sharedStyles,
        },
        {
            src: vaultSvg,
            p: 'Securely Share App secrets through deployment environments with 100% integration with pipelines services.',
            h1: 'DevOps Secrets',
            ...sharedStyles,
        },
        {
            src: appStorePng,
            p: 'catalog service which will enable the search and discovery of corporate deployment libraries(helm charts), Kubernetes-ready apps.',
            h1: 'DevOps AppStore',
            ...sharedStyles,
            imgDivStyles: { maxHeight: '220px', maxWidth: '220px', placeSelf: 'center' },
            imgStyles: { height: '100%', width: '100%' },
        },
        {
            backgroundImage: `url(${whiteGuySittingWithAPhone}),repeating-linear-gradient( 284deg,transparent 0px, transparent 1px, rgb(251, 251, 251) 1px, rgb(251, 251, 251) 3px), repeating-linear-gradient( 14deg, transparent 0px, transparent 1px, rgb(251, 251, 251) 1px,rgb(251, 251, 251) 3px), linear-gradient(90deg, rgb(222, 222, 222), rgb(222, 222, 222))`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '0% 0%',
        },
        {
            'res-services-iphone678-background-image': 'res-services-black-guy-iphone678',
            'res-services-iphone-12-13-pro-max-background-image': 'res-services-black-guy-iphone12-13-pro-max',
            'res-services-iphone-x-background-image': 'res-services-black-guy-iphone-x',
            'res-services-iphone678-plus-background-image': 'res-services-black-guy-iphone678-plus',
            'res-services-iphone12-13-background-image': 'res-services-black-guy-iphone12-13',
            'res-services-ipad-pro-background-image': 'res-services-lying-black-guy-ipad-pro',
            'res-services-generic-laptop-background-image': 'res-services-white-guy-sitting-generic-laptop',
            'res-services-1920-1080-screen-background-image': 'res-services-white-guy-sitting-1920-1080-screen',
        },
    ],
    [
        {
            src: nexusPng,
            p: 'Single source of Truth for all your apps binaries, and build artifacts. Create, Host, and Share packages with your team, and add artifacts to your CI/CD pipelines with a single click.',
            h1: 'DevOps Artifacts',
            ...sharedStyles,
        },
        {
            src: nexusIqSvg,
            p: "Sonatype's policy engine provides a number of tools to improve component usage in your software supply chain, allowing you to automate your processes and achieve accelerated speed to delivery while also increasing product quality.",
            // SCA => Software Composition Analysis
            h1: 'DevOps SCA',
            ...sharedStyles,
            imgDivStyles: { maxHeight: '190px', maxWidth: '190px', placeSelf: 'center' },
            imgStyles: { height: '100%', width: '100%' },
        },
        {
            src: bambooPng,
            p: 'Build your first continuous integration and continuous delivery pipeline with Bamboo, a CI server that can be used to automate the build, test, and release management for software application, creating a continuous delivery pipeline.',
            h1: 'DevOps CI',
            ...sharedStyles,
        },
        {
            backgroundImage: `url(${blackGuyLyingOnStomechWithHisLaptop}),repeating-linear-gradient( 284deg,transparent 0px, transparent 1px, rgb(251, 251, 251) 1px, rgb(251, 251, 251) 3px), repeating-linear-gradient( 14deg, transparent 0px, transparent 1px, rgb(251, 251, 251) 1px,rgb(251, 251, 251) 3px), linear-gradient(90deg, rgb(222, 222, 222), rgb(222, 222, 222))`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '95% 0%',
        },
        {
            'res-services-iphone678-background-image': 'res-services-white-guy-sitting-iphone678',
            'res-services-iphone-12-13-pro-max-background-image': 'res-services-white-guy-sitting-iphone12-13-pro-max',
            'res-services-iphone-x-background-image': 'res-services-white-guy-sitting-iphone-x',
            'res-services-iphone678-plus-background-image': 'res-services-white-guy-sitting-iphone678-plus',
            'res-services-iphone12-13-background-image': 'res-services-white-guy-sitting-iphone12-13',
            'res-services-ipad-mini-background-image': 'res-services-black-guy-ipad-mini',
            'res-services-ipad-pro-background-image': 'res-services-white-guy-sitting-ipad-pro',
            'res-services-generic-laptop-background-image': 'res-services-lying-black-guy-generic-laptop',
            'res-services-156inch-laptop-background-image': 'res-services-lying-black-guy-156inch-laptop',
            'res-services-1920-1080-screen-background-image': 'res-services-lying-black-guy-1920-1080-screen',
        },
    ],
    [
        {
            src: pipelinePng,
            p: 'Orchestrate the phases of software delivery till reaching end users while providing the ability to inject quality gates in between.',
            h1: 'DevOps Pipelines',
            ...sharedStyles,
            imgDivStyles: { maxHeight: '190px', maxWidth: '190px', placeSelf: 'center' },
            imgStyles: { height: '100%', width: '100%' },
        },
        {
            src: argoWorkflowsPng,
            p: 'Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on kubernetes.',
            h1: 'DevOps CD',
            ...sharedStyles,
            imgDivStyles: { maxHeight: '190px', maxWidth: '190px', placeSelf: 'center' },
            imgStyles: { height: '100%', width: '100%' },
        },
        {
            src: openShiftSvg,
            p: 'Red Hat OpenShift is enterprise-ready Kubernetes container platform built for an open hybrid cloud strategy. It provides a consistent application platform to manage hybrid cloud, multicloud, and edge deployments.',
            h1: 'DevOps Openshift',
            ...sharedStyles,
            imgDivStyles: { maxHeight: '190px', maxWidth: '190px', placeSelf: 'center' },
            imgStyles: { height: '100%', width: '100%' },
        },
        {
            backgroundImage: `url(${asianGuyWorkingOnLaptop}), repeating-linear-gradient( 284deg,transparent 0px, transparent 1px, rgb(251, 251, 251) 1px, rgb(251, 251, 251) 3px), repeating-linear-gradient( 14deg, transparent 0px, transparent 1px, rgb(251, 251, 251) 1px,rgb(251, 251, 251) 3px), linear-gradient(90deg, rgb(222, 222, 222), rgb(222, 222, 222))`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '0% 100%',
        },
        {
            'res-services-iphone678-background-image': 'res-services-asian-guy-working-iphone678',
            'res-services-iphone-12-13-pro-max-background-image': 'res-services-asian-guy-working-iphone12-13-pro-max',
            'res-services-iphone-x-background-image': 'res-services-asian-guy-working-iphone-x',
            'res-services-iphone678-plus-background-image': 'res-services-asian-guy-working-iphone678-plus',
            'res-services-iphone12-13-background-image': 'res-services-asian-guy-working-iphone12-13',
            'res-services-ipad-mini-background-image': 'res-services-asian-guy-working-ipad-mini',
            'res-services-ipad-pro-background-image': 'res-services-asian-guy-working-ipad-pro',
        },
    ],
];
